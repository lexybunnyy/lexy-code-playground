# Default(Linux).sublime-keymap
# [{ "keys": ["ctrl+t"], "command": "test_replace" }]
import sublime, sublime_plugin
import re

class TestReplaceCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        inContent = self.view.substr(sublime.Region(0, self.view.size()))
        outContent = logGrouper(inContent)
        self.view.erase(edit, sublime.Region(0, self.view.size()))
        self.view.insert(edit, 0, 
        	outContent + "\n"+
        	putToComment(inContent))


def logGrouper(inContent):
	GroupsList = [
		["Group1", r'.*group1.*'],
		["Group2", r'.*group2.*'],
		["Group3", r'.*group3.*']
	]

	leftOverContent = fixOutContent(inContent)
	outContent = ""
	for gElem in GroupsList:
		[groupContent, leftOverContent] =  findMerge(
			gElem[0], gElem[1], inContent, leftOverContent);
		outContent = outContent + groupContent

	leftOverContent = "\n<!-- LeftOver -->" + leftOverContent
	outContent = outContent + leftOverContent
	return outContent

def logParser(outContent, parseList): 
	for pElem in parseList:
		outContent = re.sub(pElem[0], pElem[1], outContent)
	return outContent

def findMerge(resultName, rExpr, inContent, outContent):    # findMerge
	result = ""
	findAllResult = re.findall(rExpr, inContent)
	for i in findAllResult:
		result = i +"\n" + result
	outContent = re.sub(rExpr, '', outContent)
	outContent = re.sub(r'\n\n\s*', '\n', outContent)
	result = "\n<!-- "+ resultName +" -->\n"+ result
	return [result, outContent]

def putToComment(inContent):
	inContent = re.sub(r'\n', '\n\t', inContent)
	inContent = '\n<!--\n\t' + inContent + '\n-->\n'
	return inContent

def fixOutContent(outContent):
	parseList = [
		[
			r'removethis',
			r''
		],
		[
			r'\n\n\n+',
			r'\n\n'
		]
	]
	return logParser(outContent, parseList)

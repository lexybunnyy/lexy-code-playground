object Demo extends App {
    def f(num:Int, arr:List[Int]) : List[Int] = {
        
        def calc(res: List[Int], iter: List[Int]): List[Int] =
        {
            if (iter.isEmpty)
                return res
            else
                return calc(List.fill(num)(iter.head) ++ res, iter.tail)
        }
        

        calc(List[Int](), arr).reverse
    }

  var n = scala.io.StdIn.readInt
  f(n)
}

/*

def f(arr:List[Int]):List[Int] = {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution
*/  
    case class ListCutterClass(currentList:List[Int], result:List[Int], isOdd:Boolean);
    def listCutter(currentList:List[Int], result:List[Int], isOdd:Boolean): List[Int] = 
        listCutter2(ListCutterClass(currentList, result, isOdd))
    
    def listCutter2(listCutterClass: ListCutterClass): List[Int] = listCutterClass match {
        case ListCutterClass(h :: tail, result, true) => listCutter(tail, result :+ h, false)
        case ListCutterClass(h :: tail, result, false) => listCutter(tail, result, true)
        case ListCutterClass(Nil, result, _) => result
    }
    
    listCutter(arr, List[Int](), false)
}

*/
## Binary Serach Tree

[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

##

Binary Search Tree, Türkçe olarak "İkili Arama Ağacı" olarak adlandırılır ve bir ağaç veri yapısıdır.

1. Her düğüm (node) en fazla iki çocuğa sahiptir. Bu çocuklar, sol çocuk (sol alt ağaç) ve sağ çocuk (sağ alt ağaç) olarak adlandırılır.

2. Her düğümde bir değer (anahtar veya key) bulunur ve bu değer, ağacın diğer düğümleri ile karşılaştırılabilir ve sıralanabilir. Genellikle, soldaki çocuk düğümün değeri, ebeveyn düğümündeki değerden küçük veya eşitken, sağdaki çocuk düğümün değeri daha büyük olur.

3. İkili arama ağacı, her düğümün sol alt ağacındaki düğümlerin değerleri ebeveyn düğümün değerinden küçük ve sağ alt ağacındaki düğümlerin değerleri daha büyük olduğu bir şekilde dengeli bir şekilde oluşturulur.

##

Verilen dizi: [7, 5, 1, 8, 3, 6, 0, 9, 4, 2]  
Binary Search Tree:

            7
           / \
          5   8
         / \   \
        1   6   9
       / \
      0   3
         / \
        2   4

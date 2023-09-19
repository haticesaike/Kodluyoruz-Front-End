# Insertion Sort

[22,27,16,2,18,6] -> Insertion Sort

- Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

- Big-O gösterimini yazınız.

- Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

Average case: Aradığımız sayının ortada olması  
 Worst case: Aradığımız sayının sonda olması  
 Best case: Aradığımız sayının dizinin en başında olması.

##

İnsertion sort, sıralama algoritmalarından biridir ve bir dizi veya liste içindeki öğeleri sıralamak için kullanılır.

1. Dizinin ilk öğesi sıralı kabul edilir.
2. İkinci öğe alınır ve bu öğeyi dizinin sıralı kısmına uygun bir konuma eklemek için sıralı kısmı taranır.
3. İkinci öğe, sıralı kısım içinde doğru konumunu bulduğunda, bu öğenin yerleştirildiği konumdan sonraki öğeler bir pozisyon sağa kaydırılır.
4. Bu adımlar dizinin sonuna kadar tekrarlanır, her seferinde bir öğe doğru konumuna yerleştirilir.
5. Sıralama işlemi tamamlandığında, dizi sıralanmış olur.

##

Verilen dizi: [22, 27, 16, 2, 18, 6]  
Sıralı dizi: [2, 6, 16, 18, 22, 27]  
Big-O Gösterimi: O(n^2)  
Dizi sıralandıktan sonra 18 sayısı Avarage Case kapsamına girer.

# Selection Sort

[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

##

Selection sort, sıralama algoritmalarından biridir ve bir diziyi veya listeleyi sıralamak için kullanılır.

1. Dizinin ilk öğesini, dizinin tamamının en küçüğü veya en büyüğü olarak kabul eder ve bu öğeyi sıralanmış kısmın başına yerleştirir.
2. Ardından, sıralanmış kısmı dışarıda bırakarak dizinin geri kalan kısmını tarar ve en küçük veya en büyük öğeyi bulur.
3. Bulunan bu öğeyi sıralanmış kısmın sonuna ekler.
4. Bu işlem, dizinin sıralanmış kısmı dizinin tamamı haline gelene kadar tekrarlanır.

##

Verilen dizi: [7,3,5,8,2,9,4,15,6]

Sıralama adımları:  
1- [2, 3, 5, 8, 7, 9, 4, 15, 6]  
2- [2, 3, 5, 8, 7, 9, 4, 15, 6]  
3- [2, 3, 4, 8, 7, 9, 5, 15, 6]  
4- [2, 3, 4, 5, 7, 9, 8, 15, 6]

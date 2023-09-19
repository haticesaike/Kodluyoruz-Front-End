## Merge Sort

[16,21,11,8,12,22] -> Merge Sort

- Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
- Big-O gösterimini yazınız.

##

Merge sort, sıralama algoritmalarından biridir ve bir diziyi veya listeleyi sıralamak için kullanılır. Merge sort, "böl ve fethet" (divide and conquer) algoritma tasarımı kullanır.

1. Dizi veya liste, eğer yalnızca bir öğe içeriyorsa sıralanmış kabul edilir.
2. Dizi veya liste eğer birden fazla öğe içeriyorsa, ortadan ikiye bölünür.
3. Her iki parça için merge sort işlemi rekürsif olarak uygulanır, yani her parça tekrar aynı şekilde ikiye bölünür ve sıralanır.
4. İkiye bölünmüş parçalar sıralandığında, bu parçalar birleştirilir (merge işlemi). Birleştirme sırasında, her iki parça da sıralıdır, bu nedenle birleştirme işlemi iki sıralı parçayı birleştirerek yeni bir sıralı parça oluşturur.
5. İki parçanın birleştirilmesi sırasında, öğelerin sıralı bir şekilde karşılaştırılması ve birleştirilmesi gereklidir. Bu işlem, iki parçanın elemanlarını karşılaştırarak daha büyük veya daha küçük olanı birleştiren bir birleştirme işlemi içerir.
6. Bu adımlar, orijinal dizi veya liste tamamen sıralanana kadar tekrarlanır.

##

Verilen dizi: [16,21,11,8,12,22]

Sıralama adımları:  
left: [16, 21, 11] > [11, 16, 21]  
right: [8, 12, 22] > [8, 12, 22]  
merge: [8, 11, 12, 16, 21, 22]

Big-O gösterimi O(n log n)

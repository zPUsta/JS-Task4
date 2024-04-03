// 1. mehsullarin ucuzdan bahaya siralanmasi
let products = [
    {
      brand: "Iphone",
      model: "Iphone 13",
      price: "1200"
    },
    {
      brand: "Iphone",
      model: "Iphone 13 pro",
      price: "1500"
    },
    {
      brand: "Samsung",
      model: "Galaxy A8",
      price: "800"
    },
    {
      brand: "Huawei",
      model: "P60 pro",
      price: "1000"
    }
  
  ]
  
  const priceSort = products.sort((a,b)=>a.price - b.price);
  const ForEach = products.forEach((x)=>console.log(x.brand,x.price))
  console.log(products)

// 2. Beş random eded yaradib arraya yigin, sonda ise onlarin cemini gosterin

// let array = [];
// for(i=0; i<5; i++){
// array.push(Math.floor(Math.random(i) *100 ) + 1);

// }
// console.log(array)

// let sum = 0;
// for(j=0; j<array.length; j++){
//   sum += array[j];

// }
// console.log(`cəm: ${sum} `)

// 3. Foreach arasdirin, map ve normal for dongusu ile ferqi nedi ona baxin
// 1.map -lə hər hansı bir hesablama ya başqa əməliyyat apardıda arrayin içindəkilər yeni bir arrayda bizə qayıdır.
// 2.amma forEach də arrayin öz üzərində dəyişiklik aparır
// 3.for arrayi uzunluğu qədər ya da ki bizim verdiyimiz say qədər döngü yaradır biz idarə edə bilirik indexinə görə idarə edə bilərik
// daha təmiz və az kod yazmaq üçün map və forEach daha əlverişlidir.
// 4. Json, fetch, api bunlar nedir nece isleyir
// JSON əsasən məlumatların daşımaq üçün istifadə olunur, Fetch və API-lər məlumatları almaq və emal etmək üçün istifadə olunur.
// Fetch, modern brauzerlər və Node.js tərəfindən dəstəklənən bir API-dir və şəbəkədən resursları almaq üçün istifadə olunur. 
// 

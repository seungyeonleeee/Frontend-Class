const productInfo =
  "https://my-json-server.typicode.com/seungyeonleeee/Olive-Fake/db";

fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data); //Array(5)

    let idCounter = Date.now();
    const products = {
      data: data.data.map((item) => ({
        ...item,
        id: idCounter++,
      })),
    };
    //console.log(products); //id 추가된 Array(5)

    //카테고리 만들기
    //인스턴스 객체화 시키기
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const name = params.get("name");
    //console.log(name, category); //Cup life

    const product = products.data.find(
      (product) => product.category === category && product.name === name
    );
    //console.log(product); //클릭한 상품의 정보

    const price = new Intl.NumberFormat("ko-kr", {
      // style: "currency",
      currency: "KRW",
    }).format(product.price);

    if (product) {
      const productDetailDiv = document.querySelector("#product-detail");
      //console.log(productDetailDiv);
      productDetailDiv.innerHTML = `
    <div class="product-category">
      <h3>현재 카테고리 ${product.category} > ${product.name}</h3>
    </div>
    <div class="product-img">
      <img src="${product.img}" alt="${product.name}"/>
    </div>
    <div class="product-info">
      <h1>${product.name}</h1>
      <p>Category : ${product.category}</p>
      <p>Price : ${price}원</p>
    </div>
    <button>장바구니 이동</button>  
    `;
    } else {
      productDetailDiv.innerHTML = "존재하지 않는 상품입니다.";
    }
  })
  .catch((error) => {
    console.log(error);
  });

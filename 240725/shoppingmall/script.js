// import products from "./products.js";

//console.log(products.data[0].img);

// const productInfo = "./db.json";
const productInfo =
  "https://my-json-server.typicode.com/seungyeonleeee/Olive-Fake/db";
fetch(productInfo)
  .then((response) =>
    //json을 객체로 변환
    response.json()
  )
  .then((data) => {
    //상품 id 만들기
    //console.log(data); //객체
    let idCounter = Date.now();
    console.log(idCounter);
    const products = {
      data: data.data.map((item) => ({
        //객체로 넣기 위해 ()를 씀, ()없으면 실행문이 됨
        ...item, //전개연산자 : 기존배열은 유지하면서 신규 값 추가
        id: idCounter++, //아이디 값 넣기(값이 다 다르게 1씩 증가)
      })),
    };
    //아이디 추가 확인
    //console.log(products.data);

    //removing items
    //탭을 클릭했을 때 중복해서 쌓이는 아이템을 제거하기 위한 함수
    const removeItems = () => {
      const items = document.querySelectorAll("li");
      items.forEach((item) => {
        item.remove();
      });
    };

    //making items
    //여러개의 상품 다 가져오기
    const createItem = (product) => {
      const ul = document.querySelector("ul");

      const li = document.createElement("li");
      const img = document.createElement("img");
      const attr = document.createAttribute("src");
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const span = document.createElement("span");

      li.id = product.id;

      //화폐 단위 만들기
      const price = new Intl.NumberFormat("ko-kr", {
        style: "currency",
        currency: "KRW",
      }).format(product.price);

      //상품 정보 만들기
      h3.className = "name";
      h3.innerText = product.name;

      span.className = "price";
      span.innerText = price;

      //이미지 경로 만들기
      attr.value = product.img;
      img.setAttributeNode(attr);

      //태그 만들기
      div.append(h3, span);
      li.append(img, div);
      ul.appendChild(li);

      //li 클릭 시 페이지 이동
      li.addEventListener("click", () => {
        //console.log("click");
        const url = `product-detail.html?category=${
          product.category
        }&name=${encodeURIComponent(product.name)}`;
        window.location.href = url;
      });
    };

    //importing items
    //가져온 상품들을 화면에 출력
    const importData = () => {
      products.data.map((product) => {
        createItem(product);
      });
    };
    importData();

    //버튼 이벤트 - sort-buttons
    //newlist
    const newlisting = document.querySelector(".newlisting");

    const sortNew = (e) => {
      e.preventDefault();
      //console.log("click");

      removeItems();

      const myProducts = products.data.sort((a, b) => {
        return b.id - a.id;
      });

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    newlisting.addEventListener("click", sortNew);

    //ascending
    const asceBtn = document.querySelector(".ascending");
    //console.log(asceBtn);

    const sortAsce = (e) => {
      e.preventDefault();
      //console.log("click");

      const myProducts = products.data.sort((a, b) => {
        return a.price - b.price;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    asceBtn.addEventListener("click", sortAsce);

    //descending
    const descBtn = document.querySelector(".descending");
    //console.log(descBtn);

    const sortDesc = (e) => {
      e.preventDefault();
      //console.log("click");

      const myProducts = products.data.sort((a, b) => {
        return b.price - a.price;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    descBtn.addEventListener("click", sortDesc);

    //search - 검색기능
    //filter 함수
    const searchBar = document.querySelector(".searchBar");
    //console.log(searchBar);

    searchBar.addEventListener("input", () => {
      //input - 무엇이든지 어떠한 값이 들어온다면
      //console.log("input");

      //소문자를 기본값으로 가져가기
      const keyword = searchBar.value.toLowerCase();
      //console.log(keyword);

      //예외조항처리
      if (keyword === "") {
        removeItems();
        importData();
      } else {
        //json의 name값과 input의 검색어가 같은 경우
        const filtered = products.data.filter((product) => {
          return product.name.toLowerCase().includes(keyword);
        });

        removeItems();

        filtered.forEach((product) => {
          createItem(product);
        });
      }
    });

    //select event - 카테고리
    const select = document.querySelector("select");
    //console.log(select);
    const selectCategory = (e) => {
      //옵션값이 바뀐다면
      //console.log("change");
      //console.log(e); //target 확인

      //console.log(e.target.options.selectedIndex);
      //selectedIndex 내가 찍은 옵션 인덱스번호

      const selectedIndex = e.target.options.selectedIndex;
      const value = e.target.options[selectedIndex].value;
      //console.log(value);

      const filtered = products.data.filter((product) => {
        return product.category === value;
      });

      removeItems();
      filtered.forEach((product) => {
        createItem(product);
      });
    };
    select.addEventListener("change", selectCategory);
  })
  .catch((error) => {
    console.log(error);
  });

// Channel Talk
(function () {
  var w = window;
  if (w.ChannelIO) {
    return w.console.error("ChannelIO script included twice.");
  }
  var ch = function () {
    ch.c(arguments);
  };
  ch.q = [];
  ch.c = function (args) {
    ch.q.push(args);
  };
  w.ChannelIO = ch;
  function l() {
    if (w.ChannelIOInitialized) {
      return;
    }
    w.ChannelIOInitialized = true;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
    var x = document.getElementsByTagName("script")[0];
    if (x.parentNode) {
      x.parentNode.insertBefore(s, x);
    }
  }
  if (document.readyState === "complete") {
    l();
  } else {
    w.addEventListener("DOMContentLoaded", l);
    w.addEventListener("load", l);
  }
})();

ChannelIO("boot", {
  pluginKey: "d7f7fbae-f872-4f07-876a-fa8f112d7a4c",
});

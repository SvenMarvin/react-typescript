export default class Snow {
  snowInterval: any;

  constructor() {
    this.snowInterval = true; // geht nur wenn 1 oder true ??? --> wieso (und nur einmal)
  }

  snow() {
    this.snowInterval = setInterval(() => {
      this.createSnowflake();
    }, 100);
  }

  stopSnow() {      
      clearInterval(this.snowInterval);
      console.log(this.snowInterval);
  }

  removeSnow(){
      let arr = document.querySelectorAll('.snowflake')!;
      console.log(arr);
      arr.forEach(el => {
          el.parentNode!.removeChild(el);
      });
  }

  createSnowflake() {
    // Variables
    let browserWidth = window.innerWidth;
    let randomWeight = Math.floor(Math.random() * Math.floor(6)) + 3;
    // DOM EL
    let bodyEl = document.querySelector("body")! as HTMLElement;
    let snowflake = document.createElement("span")! as HTMLSpanElement;
    // Css Array
    let flakeArr = ["flakeOne", "flakeTwo", "flakeThree"];
    const randomArrValue = Math.floor(Math.random() * flakeArr.length);

    snowflake.classList.add("snowflake");
    snowflake.classList.add(flakeArr[randomArrValue]);
    snowflake.style.left = `${Math.floor(
      Math.random() * Math.floor(browserWidth)
    )}px`;
    snowflake.style.height = `${randomWeight}px`;
    snowflake.style.width = `${randomWeight}px`;

    bodyEl.appendChild(snowflake);
  }
}
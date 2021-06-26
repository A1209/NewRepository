var mgr;

function setup() {
  createCanvas(windowWidth,windowHeight);
  mgr = new SceneManager()
  mgr.addScene(homepage)
  mgr.addScene(payPage)

  mgr.showNextScene()
}




function draw() {
  mgr.draw()
}
function homepage(){
  this.setup = function(){

    let col = color(46,224,85); //use color instead of fill

      button = createButton(" PAY ");
      button.style('font-size', '120px');
      button.style('background-color', col);
      button.position(290,380);
      button.mousePressed(pay)


  }
  function pay(){
    button.hide()
    mgr.showScene(payPage)
  }


  this.draw = function(){
    fill(0, 170, 255)
    rect(20, 20, 500, 600)
    textSize(25)
    let a = 'CHEAP'
    fill(10,10,10)
    text(a,180,50,100,100)

    textSize(20)
    let o = '    and'
    fill(10,10,10)
    text(o,180,90,100,100)

    textSize(25)
    let p = 'CLEAN'
    fill(10,10,10)
    text(p,180,130,100,100)

    textSize(45)
    let n = 'WATER'
    fill(10,10,10)
    text(n,300,70,100,100)

    textSize(18)
    let k = 'Water sold'
    fill(10,10,10)
    text(k,140,170,100,100)

    fill(255,255,255)
    rect(120,200,130,40)

    textSize(18)
    let l = 'Money'
    fill(10,10,10)
    text(l,320,170,100,100)

    textSize(18)
    let m = 'earned'
    fill(10,10,10)
    text(m,380,170,100,100)

    fill(255,255,255)
    rect(310,200,130,40)

    textSize(16)
    var b;
    b= 'ℓ = 1¢\nBuy 3ℓ get 1ℓ free'
    fill(10)
    text(b,350,290,100,100)

    fill(230,251,255)
    rect(70, 300, 200, 50)

    fill(230,251,255)
    rect(70, 390, 200, 50)

    fill(230,251,255)
    rect(70, 480, 200, 50)

    textSize(15)
    let c = 'Choose your language'
    fill(10)
    text(c,70,260,100,100)

    textSize(15)
    let d = 'Choose your reigon'
    fill(10)
    text(d,70,350,100,100)

    textSize(15)
    let e = 'Choose your country'
    fill(10)
    text(e,70,440,100,100)


  }
}



function payPage(){
  this.draw = function(){
    fill(0, 170, 255)
    rect(20, 20, 500, 600)

    fill(200,200,200)
    rect(60, 150, 300, 400)

    fill(255,255,255)
    circle(90,200,25,25)

    fill(255,255,255)
    circle(90,300,25,25)

    fill(255,255,255)
    circle(90,400,25,25)

    fill(255,255,255)
    circle(90,500,25,25)

    fill(255,255,255)
    rect(140,176, 200,50)

    fill(255,255,255)
    rect(140,276, 200,50)

    fill(255,255,255)
    rect(140,376, 200,50)

    fill(255,255,255)
    rect(140,476, 200,50)

    textSize(25)
    let g = 'Google Pay'
    fill(10)
    text(g,170,183,200,50)

    textSize(25)
    let h = 'Grab Pay'
    fill(10)
    text(h,180,283,200,50)

    textSize(25)
    let i = 'Apple Pay'
    fill(10)
    text(i,180,383,200,50)

    textSize(25)
    let j = 'Pay Pal'
    fill(10)
    text(j,190,483,200,50)
  }
}

<script setup>
import Menu from '../menu/menu.vue'
</script>

<template>

 <div class="relative h-screen w-screen">
   
  <div class="title">
        <h1>Star Wars
          <span>Website</span>
        </h1>
      </div>

  <div id="yoda-wrapper">
    <div id="yoda">
      <div class="ear-left"></div>
      <div class="ear-right"></div>
    </div>
    <p>Mr. Yoda</p>
  </div>

  <div id="darth-vader-wrapper">
    <div id="darth-vader">
      <div class="top"></div>
      <div class="middle-left"></div>
      <div class="middle-right"></div>
      <div class="bottom"></div>
    </div>
    <p>Mr. Darth Vader</p>
  </div>

  <div id="luke-wrapper">
    <div id="luke">
      <div class="face"></div>
      <div class="hair"></div>
      <div class="hair-left"></div>
      <div class="hair-right"></div>
    </div>
    <p>Mr. Luke Skywalker</p>
  </div>

  <div id="chewie-wrapper">
    <div id="chewie">
      <div class="head-left"></div>
      <div class="head-right"></div>
      <div class="hair-1"><span></span></div>
      <div class="hair-2"><span></span></div>
      <div class="hair-3"><span></span></div>
      <div class="hair-4"><span></span></div>
      <div class="hair-5"><span></span></div>
    </div>
    <p>Chewie</p>
  </div>

  <div id="storm-trooper-wrapper">
    <div id="storm-trooper">
      <div class="top"></div>
      <div class="glasses">
          <div class="left"></div>
          <div class="right"></div>
      </div> 
      <div class="middle"></div>
      <div class="bottom-left">
        <div></div> 
      </div>
      <div class="bottom-right">
        <div></div>
      </div>
      <div class="center"></div>
    </div>
    <p>Mr. Storm Trooper</p>
  </div>

  <div id="leia-wrapper">
    <div id="leia">
      <div class="hair"></div>
    </div>
    <p>Mrs. Leia</p>
  </div>

  <div id="c3po-wrapper">
    <div id="c3po">
      <div class="top"></div>
      <div class="ears"></div>
      <div class="face"></div>
      <div class="mouth"></div>
      <div class="eye-left"></div>
      <div class="eye-right"></div>
    </div>
    <p>C3PO</p>
  </div>

  <div id="the-emperor-wrapper">
    <div id="the-emperor">
      <div class="left"></div>
      <div class="right"></div>
      <div class="inner">
        <div class="face"></div>
      </div>
    </div>
    <p>The Emperor</p>
  </div>

  <div id="han-wrapper">
    <div id="han">
      <div class="hair-1"></div>
      <div class="hair-2"></div>
      <div class="hair-3"></div>
    </div>
    <p>Mr. Han Solo </p>
  </div>

  <div id="r2d2-wrapper">
    <div id="r2d2">
      <div class="body"></div>
    </div>
    <p>R2D2</p>
  </div>

  <div id="boba-fett-wrapper">
    <div id="boba-fett">
      <div class="antenna"></div>
      <div class="helmet">
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </div>
    <p>Mr. Boba Fett</p>
  </div>

  <div id="obiwan-wrapper">
    <div id="obiwan">
      <div class="top-left"></div>
      <div class="top-right"></div>
      <div class="bottom-left"></div>
      <div class="bottom-right"></div>
      <div class="face">
        <div class="moustache">
          <span></span>
        </div>
      </div>
    </div> 
    <p>Mr. Obiwan Kenobi</p>
  </div>

  <div id="death-star-wrapper">
    <div id="death-star"></div>
    <p>The Death Star</p>
  </div>
  </div>

  <Menu />

</template>

<style lang="scss" scoped>
  @import 'compass-mixins/lib/compass/css3';
  @import "https://fonts.googleapis.com/css?family=Roboto:700";

* {
  @include box-sizing(border-box);
  
  margin: 0;
  padding: 0;
  
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  
  &:before,
  &:after {
    @include box-sizing(content-box);
  }
}

h1 {
    padding-top: 2%;
    text-align: center;
}

.title {
  background-color: #fdf7d3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
}

.title h1 {
    text-align: center;
    font-size: 50px;
    text-transform: uppercase;
    color: #222;
    letter-spacing: 1px;
    font-family: Arial, Helvetica, sans-serif !important;
    font-weight: 400;
}

.title h1 span {
    margin-top: 5px;
    font-size: 15px;
    color: #222;
    word-spacing: 1px;
    font-weight: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif !important;
    font-weight: 500;
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-template-rows: 27px 0;
    grid-gap: 20px;
    align-items: center;
}

.title h1 span:after,
.title h1 span:before {
    content: " ";
    display: block;
    border-bottom: 1px solid #222;
    border-top: 1px solid #222;
    height: 5px;
    background-color: #fdf7d3;
}


div[id*="-wrapper"] {
  text-align: center;
  padding: 100px 0;
  
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 16px;
 
  > p {
    margin-top: 40px;
  }
}


// Yoda

#yoda-wrapper {
  background: #fdf7d3;
  color: #000000;
}

#yoda {
  position: relative;
  display: block;
  margin: auto;
  
  overflow: hidden;
  
  width: 339px;
  height: 181px;
  
  &:before {
    @include border-radius(50%);
    @include rotateZ(45deg);
    
    content: " ";
    position: absolute;
    background: #6d7233;
    z-index: 10;
    
    border-left: solid 91px #6d7233;
    border-right: solid 90px #626331;
    
    top: 0;
    left: 79px;
    
    width: 0;
    height: 181px;
  }
  
  .ear-left,
  .ear-right {
    position: absolute;
    overflow: hidden;
    z-index: 1;
    
    top: 37px;
    
    width: 97px;
    height: 53px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
      
      border-style: solid;
      border-color: transparent;
      
      width: 0;
      height: 0;
      
      top: 0;
      left: 0;
    }
    
    &:after {
      top: auto;
      bottom: 0;
    }
  }
    
  .ear-left {
    left: 0;
    
    &:before {
      border-bottom-color: #5a5d30;
      border-width: 0 0 28px 97px;
    }
    
    &:after {
      border-top-color: #393a2a;
      border-width: 25px 0 0 97px;
    }
  }
  
  .ear-right {
    right: 0;
    
    &:before {
      border-bottom-color: #5a5d30;
      border-width: 0 97px 28px 0;
    }
    
    &:after {
      border-top-color: #393a2a;
      border-width: 25px 97px 0 0;
    }
  }
}


// Darth Vader

#darth-vader-wrapper {
  background: #e1153a;
  color: #ffffff;
}

#darth-vader {
  position: relative;
  display: block;
  margin: auto;
  
  overflow: hidden;
  
  width: 276px;
  height: 296px;
  
  &:before {
    content: " ";
    position: absolute;
    background: transparent;
    z-index: 10;

    border: none;
    border-left: solid 4px #7d7a7b;
    border-right: solid 4px #47474a;

    top: 173px;
    left: 134px;

    width: 0;
    height: 68px;
  }
  
  .top {
    @include border-top-left-radius(50% 100%);
    @include border-top-right-radius(50% 100%);
    
    position: absolute;
    border-left: solid 100px #272727;
    border-right: solid 100px #1a1a1a;
    
    top: 0;
    left: 38px;
    
    width: 0;
    height: 125px;
  }
  
  .middle-left {
    position: absolute;
    background: transparent;
    overflow: hidden;
    
    top: 125px;
    left: 0;
    
    width: 138px;
    height: 116px;
    
    &:before {
      content: " ";
      position: absolute;
      background: transparent;

      border-style: solid;
      border-color: transparent transparent #272727 transparent;
      border-width: 0 0 116px 38px;

      top: 0;
      left: 0;

      width: 100px;
      height: 0;
    }
    
    &:after {
      @include border-radius(50%);
      
      content: " ";
      position: absolute;
      background: #040404;
      overflow: hidden;
      
      top: 0;
      left: -28px;
      
      width: 262px;
      height: 620px;
    }
  }
  
  .middle-right {
    position: absolute;
    background: transparent;
    overflow: hidden;
    
    top: 125px;
    left: 138px;
    
    width: 138px;
    height: 116px;
    
    &:before {
      content: " ";
      position: absolute;
      background: transparent;

      border-style: solid;
      border-color: transparent transparent #1a1a1a transparent;
      border-width: 0 38px 116px 0;

      top: 0;
      left: 0;

      width: 100px;
      height: 0;
    }
    
    &:after {
      @include border-radius(50%);
      
      content: " ";
      position: absolute;
      background: #040404;
      overflow: hidden;
      
      top: 0;
      right: -28px;
      
      width: 262px;
      height: 620px;
    }
  }
  
  .bottom {
    position: absolute;
    
    top: 241px;
    left: 0;
    
    width: 0;
    height: 0;
    
    border-style: solid;
    border-color: #040404 transparent transparent transparent;
    border-width: 55px 138px 0 138px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
      background: transparent;
      z-index: 10;
      
      border: none;
      border-left: solid 8px #7d7a7b;
      border-right: solid 8px #47474a;
      
      top: -101px;
      left: -21px;
      
      width: 26px;
      height: 46px;
    }
    
    &:after {
      top: -78px;
      left: -37px;
      
      width: 58px;
      height: 23px;
    }
  }
}


// Luke

#luke-wrapper {
  background: #0054a0;
  color: #ffffff;
}

#luke {
  position: relative;
  display: block;
  background: transparent;
  overflow: hidden;
  
  width: 270px;
  height: 250px;
    
  margin: auto;
  
  &:after {
    @include border-radius(50%);
    
    content: " ";
    position: absolute;
    background: #b07d46;
    border-left: solid 22px #987343;
    z-index: 0;
    
    top: 0;
    left: 18px;
    
    width: 200px;
    height: 210px;
  }
  
  .face {
    @include border-bottom-right-radius(60% 70%);
    @include border-bottom-left-radius(60% 70%);

    position: relative;
    background: #e39d72;
    border-left: solid 70px #e39d72;
    border-right: solid 120px #c38a65;
    z-index: 10;
    
    top: 52px;
    left: 33px;

    width: 190px;
    height: 198px;
  }
  
  .hair {
    @include border-radius(50%);
    
    position: absolute;
    background: transparent;
    overflow: hidden;
    z-index: 20;
    
    top: 0;
    left: 18px;
    
    width: 222px;
    height: 210px;
    
    &:before,
    &:after {
      @include border-radius(50%);
      
      content: " " ;
      position: absolute;
      background: #b07d46;
      
      width: 266px;
      height: 244px;
    }
    
    &:before {
      top: -122px;
      left: -153px;
    }
    
    &:after {
      top: -100px;
      right: -142px;
    }
  }
  
  .hair-left {
    @include rotateZ(15deg);
    
    z-index: 0;
    
    top: 100px;
    left: -37px;
    
    width: 80px;
    height: 60px;
    
    &,
    &:before,
    &:after {
      @include border-radius(50%);
    
      content: " ";
      position: absolute;
      border-right: solid 15px #987340;
      background: transparent;
    }
    
    &:before {
      @include rotateZ(5deg);
      
      top: 20px;
      left: 26px;
    
      width: 60px;
      height: 60px;
    }
    
    &:after {
      @include rotateZ(5deg);
      
      top: -10px;
      left: 20px;
    
      width: 100px;
      height: 100px;
    }
  }
  
  .hair-right {
    @include rotateZ(-15deg);
    
    z-index: 0;
    
    top: 93px;
    right: -20px;
    
    width: 80px;
    height: 60px;
    
    &,
    &:before {
      @include border-radius(50%);
    
      content: " ";
      position: absolute;
      border-left: solid 15px #987245;
      background: transparent;
    }
    
    &:before {
      @include rotateZ(5deg);
      
      top: 20px;
      right: 26px;
    
      width: 60px;
      height: 60px;
    }
  }
}


// Chewie

#chewie-wrapper {
  background: #00a13d;
  color: #000000;
}

#chewie {
  position: relative;
  display: block;
  margin: auto;
  
  overflow: hidden;
  
  width: 288px;
  height: 374px;
  
  &:before,
  &:after {
    content: " ";
    position: absolute;
    z-index: 20;
    
    top: 141px;
    
    width: 0;
    height: 0;
    
    border-style: solid;
    border-color: transparent;
    border-width: 28px 0 7px 0;
  }
  
  &:before {
    left: 116px;
    border-right: solid 24px #393939;
  }
  
  &:after {
    left: 140px;
    border-left: solid 24px #1d1f21;
  }
  
  .head-left {
    position: absolute;
    overflow: hidden;
    z-index: 10;
    
    top: 0;
    left: 0;
    
    width: 140px;
    height: 374px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
    }
    
    &:before {
      @include border-top-left-radius(140px);
      @include border-bottom-left-radius(300px);
      
      background: #a76622;
      
      top: 0;
      left: 0;
      
      width: 500px;
      height: 400px;
    }
    
    &:after {
      @include border-top-left-radius(80px);
      @include border-bottom-left-radius(150px);
      
      background: #b97d3f;
      
      top: 160px;
      left: 60px;
      
      width: 500px;
      height: 230px;
    }
  }
  
  .head-right {
    position: absolute;
    overflow: hidden;
    z-index: 10;
    
    top: 0;
    left: 140px;
    
    width: 140px;
    height: 374px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
    }
    
    &:before {
      @include border-top-right-radius(140px);
      @include border-bottom-right-radius(300px);
      
      background: #a76622;
      
      top: 0;
      right: 0;
      
      width: 500px;
      height: 400px;
    }
    
    &:after {
      @include border-top-right-radius(80px);
      @include border-bottom-right-radius(150px);
      
      background: #ae7136;
      
      top: 160px;
      right: 60px;
      
      width: 500px;
      height: 230px;
    }
  }
  
  .hair-1,
  .hair-2,
  .hair-3,
  .hair-4,
  .hair-5 {
    position: absolute;
    z-index: 0;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
      
      width: 0;
      height: 0;
      
      border-style: solid;
      border-color: transparent;
      border-width: 0;
    }
  }
  
  .hair-1 {
    top: 192px;
    left: 0;
    
    &:before {
      top: 68px;
      left: 7px;
      
      border-color: #6c4721 #6c4721 transparent #6c4721;
      border-width: 40px 0 4px 40px;
    }
    
    &:after {
      top: 0;
      left: 7px;
      
      border-color: #a76622 transparent transparent transparent;
      border-width: 112px 112px 0 0;
    }
    
    span {
      position: absolute;
      overflow: hidden;
      
      top: 0;
      left: 0;
      
      width: 7px;
      height: 112px;
      
      &:before {
        @include border-radius(50%);
        
        content: " ";
        position: absolute;
        background: #a76622;
        
        top: -60px;
        left: 0;
        
        width: 100px;
        height: 240px;
      }
    }
  }
  
  .hair-2 {
    top: 257px;
    left: 27px;
    
    &:before {
      top: 46px;
      left: 31px;
      
      border-color: #6c4721 #6c4721 transparent #6c4721;
      border-width: 15px 0 15px 40px;
    }
    
    &:after {
      top: 0;
      left: 0;
      
      border-color: #a76622 transparent transparent transparent;
      border-width: 76px 82px 0 31px;
    }
    
    span {
      position: absolute;
      overflow: hidden;
      
      top: 0;
      left: 0;
      
      width: 31px;
      height: 76px;
      
      &:before {
        @include border-radius(50%);
        
        content: " ";
        position: absolute;
        background: #a76622;
        
        top: -155px;
        left: 0;
        
        width: 100px;
        height: 240px;
      }
    }
  }
  
  .hair-3 {
    top: 235px;
    left: 213px;
    
    &:before {
      top: 0;
      left: 0;
      
      border-color: transparent #a76622 transparent transparent;
      border-width: 66px 41px 21px 0;
    }
    
    &:after {
      top: 0;
      left: 0;
      
      border-color: transparent #6c4721 transparent transparent;
      border-width: 31px 31px 56px 10px;
    }
    
    span {
      position: absolute;
      overflow: hidden;
      
      top: -111px;
      left: 41px;
      
      width: 16px;
      height: 198px;
      
      &:before {
        @include border-radius(50%);
        
        content: " ";
        position: absolute;
        background: #6f4621;
        
        top: -177px;
        right: 0;

        width: 254px;
        height: 500px;
      }
    }
  }
  
  .hair-4 {
    top: 195px;
    left: 235px;
    
    &:before,
    &:after {
      z-index: 10;
    }
    
    &:before {
      top: 0;
      left: 0;
      
      border-color: transparent transparent transparent #a76622;
      border-width: 86px 0 5px 41px;
    }
    
    &:after {
      top: 0;
      left: -9px;
      
      border-color: transparent #6c4721 transparent transparent;
      border-width: 30px 51px 56px 0;
    }
    
    span {
      position: absolute;
      overflow: hidden;
      z-index: 0;
      
      top: -112px;
      left: 26px;
      
      width: 42px;
      height: 198px;
      
      &:before {
        @include border-radius(50%);
        
        content: " ";
        position: absolute;
        background: #6f4621;
        
        top: -127px;
        right: 20px;

        width: 254px;
        height: 500px;
      }
    }
  }    
  
  .hair-5 {
    top: 250px;
    left: 179px;
    
    &:before {
      top: 0;
      left: 0;
      
      border-color: transparent #a76622 transparent transparent;
      border-width: 66px 41px 21px 0;
    }
    
    &:after {
      top: 0;
      left: 0;
      
      border-color: transparent #6c4721 transparent transparent;
      border-width: 31px 21px 56px 20px;
    }
    
    span {
      position: absolute;
      overflow: hidden;
      
      top: -123px;
      left: 41px;
      
      width: 94px;
      height: 210px;
      
      &:before {
        @include border-radius(50%);
        
        content: " ";
        position: absolute;
        background: #6f4621;
        
        top: -253px;
        right: 34px;

        width: 254px;
        height: 500px;
      }
    }
  }
}


// Storm Trooper

#storm-trooper-wrapper {
  background: #798593;
  color: #ffffff;
}

#storm-trooper {
  position: relative;
  display: block;
  margin: auto;
  
  overflow: hidden;
  
  width: 286px;
  height: 306px;
  
  .top {
    @include border-top-radius(106px);
    
    position: absolute;
    background: #ffffff;
    border-right: solid 112px #e2e4e8;
    
    top: 0;
    left: 31px;
    
    width: 224px;
    height: 106px;
    
    &:before {
      content: " ";
      
      position: absolute;
      background: #2d2e31;
      border-right: solid 120px #040404;
      
      top: 106px;
      left: -8px;
      
      width: 120px;
      height: 14px;
    }
  }
  
  .glasses {
    position: absolute;
    background: #ffffff;
    border-right: solid 125px #e2e4e8;
    
    top: 120px;
    left: 18px;
    
    width: 250px;
    height: 40px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
      
      border-style: solid;
      border-color: transparent;
      border-width: 40px 0 0 0;
    }
    
    &:before {
      left: -2px;
      
      border-top-color: #ffffff;
      border-left-width: 2px;
    }
    
    &:after {
      left: 250px;
      
      border-top-color: #e2e4e8;
      border-right-width: 2px;
    }
    
    .left {
      position: absolute;
      background: #e2e4e8;
      
      top: 0;
      right: 0;
      
      width: 88px;
      height: 7px;
      
      &:before,
      &:after {
        content: " ";
        position: absolute;
      }
      
      &:before {
        top: 0;
        left: -25px;
        
        width: 0;
        height: 0;
        
        border-style: solid;
        border-color: #e2e4e6 transparent transparent transparent;
        border-width: 7px 0 0 25px;
      }
      
      &:after {
        @include border-bottom-left-radius(10% 100%);
        @include border-bottom-right-radius(100% 100%);
        
        background: #e2e4e6;
        
        top: 0;
        right: 10px;
        
        width: 80px;
        height: 32px;
      }
    }
    
    .right {
      position: absolute;
      background: #bfbdc4;
      
      top: 0;
      left: 125px;
      
      width: 88px;
      height: 7px;
      
      &:before,
      &:after {
        content: " ";
        position: absolute;
      }
      
      &:before {
        top: 0;
        right: -25px;
        
        width: 0;
        height: 0;
        
        border-style: solid;
        border-color: #bfbdc4 transparent transparent transparent;
        border-width: 7px 25px 0 0;
      }
      
      &:after {
        @include border-bottom-left-radius(100% 100%);
        @include border-bottom-right-radius(10% 100%);
        
        background: #bfbdc4;
        
        top: 0;
        left: 10px;
        
        width: 80px;
        height: 32px;
      }
    }
  }
  
  .middle {
    @include border-top-radius(14% 50%);
    @include border-bottom-radius(40% 50%);
    
    position: absolute;
    overflow: hidden;
    background: #ffffff;
    border-right: solid 143px #e2e4e8;
    
    top: 155px;
    left: 0;
    
    width: 286px;
    height: 100px;
  }
  
  .bottom-left {
    @include border-bottom-left-radius(100% 100%);
    @include border-bottom-right-radius(70% 40%);
    
    position: absolute;
    background: #ffffff;
    overflow: hidden;
    z-index: 1;
    
    top: 160px;
    left: 22px;
    
    width: 120px;
    height: 146px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
    }
    
    &:before {
      @include border-radius(50%);
      
      background: #e2e4e8;
      
      top: 52px;
      left: 14px;
      
      width: 108px;
      height: 108px;
    }
    
    &:after {
      top: 21px;
      right: 0;
      
      border-style: solid;
      border-color: transparent #e2e4e8 transparent transparent;
      border-width: 40px 83px 40px 0;
    }
    
    div {
      @include border-radius(50%);
      @include rotateZ(45deg);
      
      position: absolute;
      background: #2c2d30;
      border-left: solid 14px #2c2d30;
      border-right: solid 14px #040404;
      
      top: 91px;
      left: 50px;
      
      width: 28px;
      height: 28px;
    }
  }
  
  .bottom-right {
    @include border-bottom-right-radius(100% 100%);
    @include border-bottom-left-radius(70% 40%);
    
    position: absolute;
    background: #e2e4e8;
    overflow: hidden;
    z-index: 1;
    
    top: 160px;
    left: 142px;
    
    width: 120px;
    height: 146px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
    }
    
    &:before {
      @include border-radius(50%);
      
      background: #bfbdc4;
      
      top: 52px;
      right: 14px;
      
      width: 108px;
      height: 108px;
    }
    
    &:after {
      top: 21px;
      left: 0;
      
      border-style: solid;
      border-color: transparent transparent transparent #bfbdc4;
      border-width: 40px 0 40px 83px;
    }
    
    div {
      @include border-radius(50%);
      @include rotateZ(45deg);
      
      position: absolute;
      background: #2c2d30;
      border-left: solid 14px #2d2e31;
      border-right: solid 14px #060606;
      
      top: 91px;
      right: 50px;
      
      width: 28px;
      height: 28px;
    }
  }
  
  .center {
    @include border-radius(50%);
    
    position: absolute;
    background: #2c2d30;
    border-right: solid 24px #040404;
    z-index: 20;
    
    top: 245px;
    left: 118px;
    
    width: 48px;
    height: 48px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
    }
    
    &:before {
      border-left: solid 2px #ffffff;
      border-right: solid 2px #c1bfc6;
      
      width: 0;
      height: 38px;
      
      top: 5px;
      left: 22px;
    }
    
    &:after {
      border-left: solid 3px #ffffff;
      border-right: solid 3px #c1bfc6;
      
      width: 26px;
      height: 28px;
      
      top: 10px;
      left: 8px;
    }
  }
}


// Leia

#leia-wrapper {
  background: #f8e053;
  color: #000000;
}

#leia {
  @include border-radius(50% unquote('/') 40%);
  
  position: relative;
  display: block;
  background: #f2c4a7;
  margin: auto;
    
  border-right: solid 90px #c7a690;
  
  width: 180px;
  height: 235px;
  
  &:before,
  &:after {
    @include border-radius(25px);
    
    content: " ";
    position: absolute;
    z-index: 10;
    
    border-left: solid 25px #473e37;
    border-right: solid 25px #3d342b;
    
    top: 28px;
    
    width: 0;
    height: 169px;
  }
  
  &:before {
    left: -50px;
  }
  
  &:after {
    right: -140px;
  }
  
  .hair {
    &:before,
    &:after {
      content: " ";
      position: absolute;
      
      top: 0;
      
      width: 87px;
      height: 96px;
    }
    
    &:before {
      @include border-top-left-radius(100% 100%);
      @include border-bottom-right-radius(80% 80%);
      
      background: #473e37;
      
      left: 0;
    }
    
    &:after {
      @include border-top-right-radius(100% 100%);
      @include border-bottom-left-radius(80% 80%);
      
      background: #3d342b;
      
      right: -90px;
    }
  }
}


// C3PO

#c3po-wrapper {
  background: #e1286e;
  color: #ffffff;
}

#c3po {
  @include border-top-left-radius(60% 100%);
  @include border-top-right-radius(60% 100%);
  
  position: relative;
  display: block;
  background: #ebb887;
  border-right: solid 103px #cb9e67;
  margin: 8px auto 147px auto;
  
  width: 206px;
  height: 190px;
  
  &:before,
  &:after {
    content: " ";
    position: absolute;
    
    bottom: -93px;
    
    width: 0;
    height: 0;
    
    border-style: solid;
  }
  
  &:before {
    left: 0;
      
    border-color: #ebb887 #ebb887 transparent transparent;
    border-width: 129px 73px 7px 30px;
  }
  
  &:after {
    left: 103px;
      
    border-color: #cb9e67 transparent transparent #cb9e67;
    border-width: 129px 30px 7px 73px;
  }
  
  .top {
    @include border-radius(50%);
    
    position: absolute;
    background: #ebb887;
    border-right: solid 8px #cb9e67;
   
    width: 16px;
    height: 30px;
    
    top: -8px;
    left: 95px;
  }
  
  .ears {
    @include border-top-left-radius(6px 20px);
    @include border-top-right-radius(6px 20px);
    @include border-bottom-left-radius(30px 40px);
    @include border-bottom-right-radius(30px 40px);
      
    position: absolute;
    border-left: solid 25px #ebb887;
    border-right: solid 25px #cb9e67;
    z-index: 10;
    
    top: 148px;
    left: -6px;
    
    width: 218px;
    height: 55px;
  }
  
  .face {
    @include border-top-left-radius(50% 95%);
    @include border-top-right-radius(50% 95%);
    
    position: absolute;
    background: #fdd681;
    border-right: solid 96px #eaae42;
    z-index: 20;
    
    top: 13px;
    left: 7px;
    
    width: 192px;
    height: 135px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
      
      border-style: solid;
      
      top: 135px;
      
      width: 0;
      height: 0;
    }
     
    &:before {
      left: 0;
      
      border-color: #fdd681 #fdd681 transparent transparent;
      border-width: 116px 69px 15px 27px;
    }
     
    &:after {
      left: 96px;
      
      border-color: #eaae42 transparent transparent #eaae42;
      border-width: 116px 27px 15px 69px;
    }
  }
  
  .mouth {
    position: absolute;
    background: #9e8861;
    border-right: solid 16px #a1733f;
    z-index: 30;
    
    top: 211px;
    left: 86px;
    
    width: 32px;
    height: 11px;
  }
  
  .eye-left {
    @include border-radius(50%);
    
    position: absolute;
    background: #f2cb81;
    z-index: 30;
    
    top: 117px;
    left: 18px;
    
    width: 80px;
    height: 80px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
    }
    
    &:before {
      @include border-radius(50%);
      @include rotateZ(45deg);
      
      top: 19px;
      left: 19px;
      
      width: 0;
      height: 42px;
      
      border-left: solid 21px #f3a84a;
      border-right: solid 21px #d4904b;
    }
    
    &:after {
      @include box-shadow(
        9px 0 0 0 #f2cb81, 
        18px 0 0 0 #f2cb81,
        27px 0 0 0 #f2cb81   
      );
      
      background: #f2cb81;
      
      top: 15px;
      left: 24px;
        
      width: 3px;
      height: 50px;
    }
  }
  
  .eye-right {
    @include border-radius(50%);
    
    position: absolute;
    background: #dfa344;
    z-index: 30;
    
    top: 117px;
    left: 108px;
    
    width: 80px;
    height: 80px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
    }
    
    &:before {
      @include border-radius(50%);
      @include rotateZ(45deg);
      
      top: 19px;
      left: 19px;
      
      width: 0;
      height: 42px;
      
      border-left: solid 21px #b67d44;
      border-right: solid 21px #9b673b;
    }
    
    &:after {
      @include box-shadow(
        9px 0 0 0 #dfa344, 
        18px 0 0 0 #dfa344,
        27px 0 0 0 #dfa344   
      );
      
      background: #dfa344;
      
      top: 15px;
      left: 24px;
        
      width: 3px;
      height: 50px;
    }
  }
}


// The Emperor

#the-emperor-wrapper {
  background: #593e93;
  color: #ffffff;
}

#the-emperor {
  position: relative;
  display: block;
  margin: auto;
  overflow: hidden;
  
  width: 360px;
  height: 370px;
  
  &:before {
    content: " ";
    position: absolute;
    z-index: 10;
    
    left: 0;
    bottom: 0;
    
    width: 0;
    height: 0;
    
    border-style: solid;
    border-color: transparent #593e93;
    border-width: 70px 180px 0 180px;
  }
  
  .left {
    position: absolute;
    overflow: hidden;
    
    top: 0;
    left: 0;
    
    width: 180px;
    height: 370px;
    
    &:before {
      @include border-top-left-radius(230px 540px);
      
      content: " ";
      position: absolute;
      background: #1d3535;
      
      top: 0;
      left: -20px;

      height: 530px;
      width: 230px;
    }
  }
  
  .right {
    position: absolute;
    overflow: hidden;
    
    top: 0;
    left: 180px;
    
    width: 180px;
    height: 370px;
    
    &:before {
      @include border-top-right-radius(230px 540px);
      
      content: " ";
      position: absolute;
      background: #152423;
      
      top: 0;
      right: -20px;

      height: 530px;
      width: 230px;
    }
  }
  
  .inner {
    @include border-top-radius(100px 50px);
    
    position: absolute;
    background: #040404;
    overflow: hidden;
    
    left: 80px;
    bottom: 0;
    
    width: 200px;
    height: 250px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
      z-index: 5;
    }
    
    &:before {
      @include border-top-right-radius(60px 330px);
      @include border-bottom-right-radius(10px 380px);
      
      background: #1d3535;
        
      top: 41px;
      left: -40px;

      width: 60px;
      height: 400px;
    }
    
    &:after {
      @include border-top-left-radius(60px 330px);
      @include border-bottom-left-radius(10px 380px);
      
      background: #152423;
        
      top: 41px;
      right: -40px;

      width: 60px;
      height: 400px;
    }
    
    .face {
      @include border-bottom-radius(125px 200px);
      
      position: absolute;
      background: #c5c6c0;
      border-right: solid 85px #a0a09e;
      
      top: 0;
      left: 15px;
      
      width: 170px;
      height: 130px;
      
      &:before,
      &:after {
        @include border-radius(50%);
        
        content: " ";
        position: absolute;
      }
      
      &:before {
        border-left: solid 100px #a7aca4;
        border-right: solid 100px #858585;
        
        top: -40px;
        left: -15px;

        width: 0;
        height: 70px;
      }
      
      &:after {
        border-top: solid 5px #040404;
        
        top: 80px;
        left: 70px;
        
        width: 30px;
        height: 16px;
      }
    }
  }
}


// Han

#han-wrapper {
  background: #001e50;
  color: #ffffff;
}

#han {
  position: relative;
  display: block;
  margin: auto;
  
  overflow: hidden;
  
  width: 230px;
  height: 292px;
  
  &:before,
  &:after {
    content: " ";
    position: absolute;
  }
  
  &:before {
    @include border-top-radius(60%);
    @include border-bottom-radius(70%);
    
    background: #e69c75;
    border-left: solid 66px #e69c75;
    border-right: solid 114px #a97e65;
    z-index: 10;
    
    top: 70px;
    left: 18px;
    
    width: 0;
    height: 222px;
  }
  
  &:after {
    @include border-top-radius(50%);
    
    z-index: 50;
    
    top: 27px;
    left: 18px;
    
    width: 180px;
    height: 200px;
    
    border-top: solid 65px #4b382e;
  }
  
  .hair-1 {
    @include border-top-left-radius(15% 35%);
    @include border-top-right-radius(100% 100%);
    
    position: absolute;
    background: #4b382e;
    z-index: 20;
    
    top: 0;
    left: 104px;
    
    width: 105px;
    height: 90px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
    }
    
    &:before {
      @include border-bottom-right-radius(20px 30px);
      
      background: #4b382e;
      
      top: 90px;
      left: 86px;
      
      width: 12px;
      height: 107px;
    }
    
    &:after {
      @include border-radius(50%);
      
      border-right: solid 7px #4b382e;
      
      top: 70px;
      left: -25px;

      width: 20px;
      height: 40px;
    }
  }
  
  .hair-2 {
    @include border-top-left-radius(100% 100%);
    @include border-top-right-radius(15% 35%);
    
    position: absolute;
    background: #4b382e;
    z-index: 20;
    
    top: 18px;
    left: 10px;
    
    width: 92px;
    height: 77px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
    }
    
    &:before {
      @include border-bottom-left-radius(10px 30px);
      
      background: #4b382e;
      
      top: 90px;
      left: 8px;
      
      width: 12px;
      height: 107px;
    }
    
    &:after {
      @include border-radius(50%);
      
      border-right: solid 7px #4b382e;
      
      top: 50px;
      left: 45px;

      width: 30px;
      height: 50px;
    }
  }
  
  .hair-3 {
    @include border-top-left-radius(14px 70px);
    @include border-top-right-radius(25px 40px);
    @include border-bottom-right-radius(30px 90px);
    @include border-bottom-left-radius(20px 70px);
    
    position: absolute;
    background: #4b382e;
    
    top: 60px;
    left: 5px;
    
    width: 215px;
    height: 155px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
    }
    
    &:before {
      @include border-top-left-radius(18px 30px);
      @include border-bottom-left-radius(19px 20px);
      
      background: #4b382e;
      
      top: 40px;
      left: -5px;
      
      width: 47px;
      height: 57px;
    }
    
    &:after {
      @include border-left-radius(5px 50px);
      @include border-top-right-radius(5px 50px);
      @include border-bottom-right-radius(17px 50px);
      
      border-left: solid 5px #e69c75;
      border-right: solid 5px #a97e65;
      
      top: 66px;
      left: 20px;
      
      width: 158px;
      height: 89px;
      
      z-index: 30;
    }
  }
}


// r2d2

#r2d2-wrapper {
  background: #e5552e;
  color: #ffffff;
}

#r2d2 {
  @include border-radius(150px 150px 0 0);
  
  position: relative;
  display: block;
  background: #e2e4e8;
  border-right: solid 125px #b4b4b7;
  margin: auto;
  
  width: 250px;
  height: 150px;
  
  &:before,
  &:after {
    content: " ";
    position: absolute;
  }
  
  &:before {
    @include border-top-left-radius(50% 20%);
    @include border-top-right-radius(50% 20%);
    @include border-bottom-left-radius(10px);
    @include border-bottom-right-radius(10px);
    
    background: #0086b8;
    border-right: solid 56px #0067a3;
    
    width: 56px;
    height: 87px;
    
    left: 69px;
  }
  
  &:after {
    @include border-radius(50%);
    @include rotateZ(45deg);
    
    background: #2d2e31;
    border-right: solid 32px #040404;
    
    top: 5px;
    left: 93px;
    
    width: 32px;
    height: 64px;
  }
  
  .body {
    position: absolute;
    background: #0086b8;
    border-right: solid 125px #0067a3;
    
    top: 124px;
    left: 0;
    
    width: 250px;
    height: 13px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
    }
    
    &:before {  
      @include border-radius(15px);
      @include box-shadow(
        -50px 0 0 0 #0086b8,
        -100px 0 0 0 #0086b8,  
        
        50px 0 0 0 #0067a3,
        100px 0 0 0 #0067a3
      );
      
      background: #0086b8;
      border-right: solid 15px #0067a3;
      
      top: -28px;
      left: 110px;
      
      width: 15px;
      height: 15px;
    }
    
    &:after {
      @include border-radius(50%);
      @include rotateZ(45deg);
      
      background: #e51335;
      border-right: solid 6px #a11c29;
      
      top: -26px;
      left: 174px;
      
      width: 6px;
      height: 12px;
    }
  }
}


// Boba Fett

#boba-fett-wrapper {
  background: #7d7c78;
  color: #000000;
}

#boba-fett {
  position: relative;
  display: block;
  margin: auto;
  overflow: hidden;
  
  width: 270px;
  height: 310px;
  
  &:before {
    content: " ";
    position: absolute;
    z-index: 30;
    
    left: 14px;
    bottom: 0;
    
    width: 76px;
    height: 0;
    
    border-style: solid;
    border-color: transparent #7d7c78;
    border-width: 40px 90px 0 90px;
  }
  
  .antenna {
    position: absolute;
    background: #e7a500;
    
    top: 122px;
    left: 0;
    
    width: 45px;
    height: 62px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
    }
    
    &:before {
      background: #ececec;
      
      top: -105px;
      left: 13px;
      
      width: 7px;
      height: 105px;
    }
    
    &:after {
      top: -122px;
      left: 4px;
      
      border-style: solid;
      border-color: #040404 #040404 transparent #040404;
      border-width: 15px 0 6px 46px;
    }
  }
  
  .helmet {
    @include border-top-radius(65% 80%);
    
    position: absolute;
    overflow: hidden;
    
    top: 30px;
    left: 14px;
    
    width: 256px;
    height: 280px;
    
    &:before {
      content: " ";
      position: absolute;
      z-index: 20;
      
      border-left: solid 18px #73131e;
      border-right: solid 18px #3e0d16;
      
      left: 110px;
      bottom: 0;
      
      width: 0;
      height: 145px;
    }
    
    .left {
      position: absolute;
      border-top: solid 88px #2e6754;
      border-bottom: solid 192px #9b1318;
      
      top: 0;
      left: 0;
      
      width: 128px;
      height: 280px;
      
      &:before,
      &:after {
        content: " ";
        position: absolute;
        z-index: 10;
      }
      
      &:before {
        @include border-radius(50%);
        
        background: #2e6754;
        
        top: 52px;
        left: -100px;
        
        width: 200px;
        height: 280px;
      }
      
      &:after {
        top: 24px;
        left: 18px;
        
        border-style: solid;
        border-color: #73131e transparent transparent transparent;
        border-width: 30px 0 0 110px;
      }
    }
    
    .right {
      position: absolute;
      border-top: solid 88px #2c4e42;
      border-bottom: solid 192px #73131e;
      
      top: 0;
      left: 128px;
      
      width: 128px;
      height: 280px;
      
      &:before,
      &:after {
        content: " ";
        position: absolute;
        z-index: 10;
      }
      
      &:before {
        @include border-radius(50%);
        
        background: #2c4e42;
        
        top: 52px;
        right: -100px;
        
        width: 200px;
        height: 280px;
      }
      
      &:after {
        top: 24px;
        right: 18px;
        
        border-style: solid;
        border-color: #3e0d16 transparent transparent transparent;
        border-width: 30px 110px 0 0;
      }
    }
  }
}


// Death Star

#death-star-wrapper {
  background: #000000;
  color: #ffffff;
}

#death-star {
  @include border-radius(50%);
  @include rotateZ(-45deg);
  
  position: relative;
  display: block;
  background: #b4b2b3;
  margin: auto;
    
  border-top: solid 100px #d2d2d2;
  
  width: 200px;
  height: 200px;
  
  &:before,
  &:after {
    content: " ";
    position: absolute;
    z-index: 10;
  }
  
  &:before {
    @include border-radius(50%);
    @include rotateZ(90deg);
    
    background: transparent;
    
    border-top: solid 35px #a5a2a4;
    border-bottom: solid 35px #bebbbc;
    
    top: -65px;
    left: 85px;
    
    width: 70px;
    height: 0;
  }
  
  &:after {
    @include rotateZ(45deg);
    
    background: #797979;
    
    left: -4px;
    top: 0;
    
    width: 196px;
    height: 2px;
    
    border-left: solid 4px #000000;
    border-right: solid 4px #000000;
  }
}


// Obiwan

#obiwan-wrapper {
  background: #c4b6ad;
  color: #000000;
}

#obiwan {
  position: relative;
  display: block;
  overflow: hidden;
  margin: auto;
  
  width: 282px;
  height: 315px;
  
  .top-left {
    position: absolute;
    overflow: hidden;
    
    top: 0;
    left: 0;
    
    width: 141px;
    height: 182px;
    
    &:before {
      @include border-top-left-radius(187px 600px);
      
      content: " ";
      position: absolute;
      background: #6b594f;
      
      top: 0;
      right: 0;
      
      width: 194px;
      height: 600px;
    }
  }
  
  .top-right {
    position: absolute;
    overflow: hidden;
    
    top: 0;
    left: 141px;
    
    width: 141px;
    height: 182px;
    
    &:before {
      @include border-top-right-radius(187px 600px);
      
      content: " ";
      position: absolute;
      background: #4c423b;
      
      top: 0;
      left: 0;
      
      width: 194px;
      height: 600px;
    }
  }
  
  .bottom-left {
    position: absolute;
    overflow: hidden;
    
    top: 182px;
    left: 0;
    
    width: 141px;
    height: 133px;
    
    &:before {
      @include border-bottom-left-radius(200px);
      
      content: " ";
      position: absolute;
      background: #6b594f;
      
      top: -62px;
      left: -9px;
      
      width: 200px;
      height: 200px;
    }
  }
  
  .bottom-right {
    position: absolute;
    overflow: hidden;
    
    top: 182px;
    left: 141px;
    
    width: 141px;
    height: 133px;
    
    &:before {
      @include border-bottom-right-radius(200px);
      
      content: " ";
      position: absolute;
      background: #4c423b;
      
      top: -62px;
      right: -9px;
      
      width: 200px;
      height: 200px;
    }
  }
  
  .face {
    @include border-top-radius(103px 53px);
    @include border-bottom-radius(103px 126px);
    
    position: absolute;
    background: #040404;
    overflow: hidden;
    
    top: 115px;
    left: 38px;
    
    width: 206px;
    height: 179px;
    
    &:before,
    &:after {
      content: " ";
      position: absolute;
      
      top: 0;
      left: 37px;
    }
    
    &:before {
      @include border-bottom-radius(66px 94px);
      
      background: #ffffff;
      
      border-left: solid 66px #ffffff;
      border-right: solid 66px #e0e2e6;
      
      width: 0;
      height: 147px;
    }
    
    &:after {
      @include border-bottom-radius(42px 65px);
      
      background: #f3b390;
      
      border-left: solid 49px #f3b390;
      border-right: solid 85px #e69c75;
      
      width: 0;
      height: 101px;
    }
    
    .moustache {
      @include border-top-radius(7px 25px);
      
      position: absolute;
      border-left: solid 20px #ffffff;
      border-right: solid 20px #e0e2e6;
      z-index: 10;
      
      top: 76px;
      left: 59px;
      
      width: 92px;
      height: 25px;
      
      &:before,
      &:after {
        content: " ";
        position: absolute;
        
        top: 0;
        
        width: 4px;
        height: 25px;
      }
      
      &:before {
        @include border-bottom-left-radius(4px 10px);
        background: #f3b390;
        
        left: -4px;
      }
      
      &:after {
        @include border-bottom-right-radius(4px 10px);
        background: #e69c75;
        
        right: -4px;
      }
      
      span {
        &,
        &:before {
          position: absolute;
          
          width: 0;
          height: 0;
          
          border-style: solid;
          border-color: transparent;
          border-width: 0 0 40px 0;
        }
        
        & {
          top: -40px;
          left: -14px; 

          border-left-width: 40px;
          border-bottom-color: #ffffff;
        }
        
        &:before {
          content: " ";
          
          right: -40px;
          border-right-width: 40px;
          border-bottom-color: #e0e2e6;
        }
        
        &:after {
          @include border-radius(50%);
          
          content: " ";
          position: absolute;
          background: #e59c75;
          
          top: 0;
          left: -19px;

          width: 38px;
          height: 18px;
        }
      }
    }
  }
}

</style>

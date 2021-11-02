<template>
  <div class="main">
        <div class="oclock">
            <div id="h"></div>
            <div id="m"></div>
            <div id="s"></div>
            <div id="a1">1</div>
            <div id="a2">2</div>
            <div id="a3">3</div>
            <div id="a4">4</div>
            <div id="a5">5</div>
            <div id="a6">6</div>
            <div id="a7">7</div>
            <div id="a8">8</div>
            <div id="a9">9</div>
            <div id="a10">10</div>
            <div id="a11">11</div>
            <div id="a12">12</div>
        </div>
    </div>
</template>

<script>
export default {
    
   data() {
       return {

       }
   },
    mounted(){
        let sheet = document.styleSheets;
        console.log(sheet)
        /* var initS = document.getElementById("s");
        var initM = document.getElementById("m");
        var initH = document.getElementById("h"); */
        
        var now = new Date();
        // 根据当前时间戳调用getSeconds() Date函数获得当前秒数
        var s = now.getSeconds();
        // 根据当前时间戳调用getMinutes() Date函数获得当前分钟数
        var m = now.getMinutes();
        // 根据当前时间戳调用getHours() Date函数获得当前小时
        var h = now.getHours();
        // 由于获得的小时数字是24小时制，这里判断是否大于12，如果大于12就减去12
        h > 12 && (h -= 12);

        // 根据获得的时、分、秒，得出当前时间应转到角度
        var sdeg = s * (360/60);
        var mdeg = m * (360/60);
        var hdeg = (h * 60 + m) / (12 * 60) * 360;

       /*  initS.style.transform = "rotate("+sdeg+"deg)";
        initM.style.transform = "rotate("+mdeg+"deg)";
        initH.style.transform = "rotate("+hdeg+"deg)"; */
    
    }
}
</script>

<style>
    .main{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
        }
        .oclock{
            width: 100px; 
            height: 100px;
            border-radius: 50%;
            border: 4px solid black;
            position: relative;
        }
        #s {
            width: 2px; 
            height: 55px;
            position: absolute; 
            top: 5px; 
            left: 49px;
            background-color: red;
            /**transform-origin是变形原点，原点就是元素绕着旋转或变形的点**/
            transform-origin: 50% 45px;
            
            animation: rotateS 60s linear infinite;
        }
        #m {
            width: 4px; 
            height: 50px;
            position: absolute;
            top: 10px;
            left: 48px;
            background-color: black;
            transform-origin: 50% 40px;

            animation: rotateM 3600s linear infinite;
        }
        #h {
            width: 6px;
            height: 45px;
            position: absolute; 
            top: 15px; 
            left: 47px;
            background-color:black;
            transform-origin:50% 35px;
            animation:rotateH 43200s linear infinite;
        }

        div[id^="a"] {
            width: 7px; 
            height: 5px;
            font-size: .1em; 
            text-align: center;
            position: absolute;
            top: 0; 
            left: 46.5px;
            transform-origin: 50% 50px;
        }

        #a1 { transform: rotate(30deg) }
        #a2 { transform: rotate(60deg) }
        #a3 { transform: rotate(90deg) }
        #a4 { transform: rotate(120deg) }
        #a5 { transform: rotate(150deg) }
        #a6 { transform: rotate(180deg) }
        #a7 { transform: rotate(210deg) }
        #a8 { transform: rotate(240deg) }
        #a9 { transform: rotate(270deg) }
        #a10 { transform: rotate(300deg) }
        #a11 { transform: rotate(330deg) }

        @keyframes rotateS{
            0% {
                transform: rotate(0deg)
            }
            100%{
                transform: rotate(360deg)
            }
        }
        @keyframes rotateM{
            0% {
                transform: rotate(0deg)
            }
            100%{
                transform: rotate(360deg)
            }
        }
        @keyframes rotateH{
            0% {
                transform: rotate(0deg)
            }
            100%{
                transform: rotate(360deg)
            }
        }

</style>
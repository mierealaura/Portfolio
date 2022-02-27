var input = document.getElementById("myInput");
        var fullScreen = false;
        /* Get the documentElement (<html>) to display the page in fullscreen */
        var elem = document.documentElement;

        window.addEventListener('keydown', (event) =>{
            if(event.key === "f"){
                pushFullscreenButton()
            }
        });

        function pushFullscreenButton(){
            if(!fullScreen){
                openFullscreen()
            }else{
                closeFullscreen()
            }
        }
        
        /* View in fullscreen */
        function openFullscreen() {
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
          }
          fullScreen = true;
        }
        
        /* Close fullscreen */
        function closeFullscreen() {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
          }
          fullScreen = false;
        }


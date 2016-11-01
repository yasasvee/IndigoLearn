function moduleHomeIntroVideoImageOnTouch()
{
  	if (Home.vdIntro.source.mp4 === "")
    {
    	Home.vdIntro.setSource({
        	"mp4": "http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4"                       
       	});
    }
  
  	Home.imgIntroVideo.isVisible = false;
  	Home.vdIntro.isVisible = true;
}

function moduleHomeIntroVideoOnPrepared()
{
  	Home.vdIntro.play();
}
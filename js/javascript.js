    $(".icon-twitter").on("click", function(){

      var tweet = "A network of ‘resiliency hubs’ is preparing to help Baltimoreans cope with emergencies -- but some say scope is too narrow"; //Tweet text
      var url = "https://cnsmaryland.org/interactives/fall-2019/hubs/index.html"; //Interactive URL

      var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
      window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

    });


    $(".icon-facebook").on("click", function(){

      var picture = "https://cnsmaryland.org/interactives/fall-2019/hubs/images/social-thumb.jpg"; //Picture URL
      var title = "Resiliency Hubs"; //Post title
      var description = "A network of ‘resiliency hubs’ is preparing to help Baltimoreans cope with emergencies -- but some say scope is too narrow"; //Post description
      var url = "https://cnsmaryland.org/interactives/fall-2019/hubs/index.html"; //Interactive URL

      var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";
    window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

    });

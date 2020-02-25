var TREEFROG_SERVICE = (function() {

  var _getGetStartedContent = function() {

    let contentStr = `<h1>Treefrog CMS</h1><p>This is the screen where you will create your navigation and page content.</p><p>First, you will need to create a main navigation. Once you have created a main navigation you can create a sub-navigation if you would like to.</p><p>Once you create either a nav or sub-nav a text editor will pop up and you will be allowed to create your page content.</p>`;



    return contentStr;

  };



  var _getCreateNavButtons = function() {

    let buttonString = `<span id="createMainNav" class="btn btn-dark">Create Main Nav</span><span class="btn btn-dark">Create Sub Nav</span>`;



    return buttonString;

  };



  var _getHomeContent = function() {

    let homeContent = `<h1>Welcome to the Treefrog CMS</h1><p>Here you will create your content for your webpages. You won't be able to create all page elements but only the content for the page.</p><p>You must first create the navigation. Once you have the navigation created you can add page content and publish the page. You can even add sub navigation as well.</p><p>Your fist step is to click on the Add Navigation link and add your first navigation link.</p>`;



    return homeContent;

  };



  



  var _getHomeStartButton = function() {

    let startBtn = `<span class="btn btn-dark get-started">Get Started</span>`;



    return startBtn;

  };



  var _getAddContent = function() {

    let addContent = `<h1>Welcome to the Treefrog CMS</h1><p class="pWidth">Now you have your navigation set now you can create your content. Below you will see your navigation name and a text editor. Create your content in the text editor and then click on “Save Page Info”. Once you have done that click on “PREVIEW SITE” to see what your web page looks like.</p><h3>Nav ><span class="itemAppend"></span></h3></div>`;

    return addContent;

  }



  var _getAddContentButton = function() {

    let addContentBtn =`<span class="btn btn-dark save-page-info">Save Page Info</span>`;



    return addContentBtn;

  }



  return {

    getGetStartedContent: _getGetStartedContent,

    getCreateNavButtons: _getCreateNavButtons,

    getHomeContent: _getHomeContent,

    getHomeStartButton: _getHomeStartButton,

    getAddContent: _getAddContent,

    getAddContentButton: _getAddContentButton

  };

})();
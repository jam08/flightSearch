var headerColor = {
    changeColor: function() {
        var hg = document.body.clientHeight;
        window.onscroll = function() {
            if(document.body.scrollTop > hg || document.documentElement.scrollTop > hg) {
            document.getElementById("header").className = "afterScrolling";
            } else {
                document.getElementById("header").className = "main__header";
             }
        };
    }
}
headerColor.changeColor();
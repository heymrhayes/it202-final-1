      window.mdc.autoInit();
      // mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer')); 
      const drawer = document.querySelector('.mdc-drawer').MDCDrawer;
      // console.log(drawer);
      const modalTransaction = document.querySelector('#modalTransaction').MDCDialog;
    
      // open drawer on nav icon
      document.getElementsByClassName("mdc-top-app-bar__navigation-icon")[0].addEventListener("click", function(){
        drawer.open = true;
      });
      
      
      // close drawer on selection
//       let navs = document.getElementsByClassName("mdc-list-item");
      
//       for (let i = 0; i < navs.length; i++) {
//         navs[i].addEventListener("click", function() {
//           drawer.open = false;
//         })
//       };
        
        $("nav.mdc-list a.mdc-list-item").on("click", function(e) {
           console.log($(this))
           var file = "page-content/" + $(this).attr("href").replace("#","") + ".html";
           $("#content").load(file);
           drawer.open = false;
            
            
            
        });
        
        //DIALOG
        $('[data-mdc-dialog-action="yes"]').on("click", function(e) {
            var url = apiEndpoint + "transactions";
            var requestBody = {
                "account": targetAccountId,
                "symbol": $("#symbol").val(),
                "shares": $("#shares").val(),
                "type": $("input[name='transactionType']:checked").val()
            }
            $.ajax({
                    method: "POST",
                    contentType: "application/json",
                    url: url,
                    data: JSON.stringify(requestBody)
                  })
                    .done(function(response) { 
                        console.log(response);
                    });         
            
            
        })

        
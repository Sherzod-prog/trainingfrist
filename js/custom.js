/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */


document.addEventListener('DOMContentLoaded', () => {
    
    // Scroll


    window.addEventListener('scroll', () => {
        const noTrans = document.querySelector('.no-trans')
           if( document.documentElement.scrollTop > 67){
             noTrans.classList.add('fixed-header-on')
             
            } else{
                noTrans.classList.remove('fixed-header-on')
            }           
    })     

    const banner = document.querySelector('.banner-image')
    banner.style.background = `url('../images/banner.jpg')`

    

    // Navigation active &&  Filters

    const all = document.querySelector('[data-filter="*"]'),
    webDesign = document.querySelector('[data-filter=".web-design"]'),
    appDevelopment = document.querySelector('[data-filter=".app-development"]'),
    siteBuilding = document.querySelector('[data-filter=".site-building"]'), 
    isotopeContainer = document.querySelectorAll('.isotope-container'),
    isotopeItem = document.querySelectorAll('.isotope-item'),
    pills = document.querySelector('.nav-pills')   
    
    
    
    pills.addEventListener ('click', (item) => {
        item.preventDefault()        
    })        
    
    webDesign.addEventListener('click', (ev) => {
        
        // Navigation active
        ev.target.parentNode.classList.toggle('active')
        
            // Filter
       
            isotopeItem.forEach((it) => {
                const val = it.classList.value.split(' '),
                  webdesign = val.filter(function(v) {return v == 'web-design'})                 
                                 
                if(webdesign == 'web-design'){
                    it.style.cssText = `
                        display = 'none';
                        it.style.transition = 'all 0.6s ease';                    
                    `                
                    
                } else {
                    it.style.display = 'block'
                }               
            })            
        })


        appDevelopment.addEventListener('click', (ev) => {

            // Navigation active
            ev.target.parentNode.classList.toggle('active')

            // Filter

            isotopeItem.forEach((it) => {
                const val = it.classList.value.split(' '),
                  development = val.filter(function(v) {return v == 'app-development'})

                if(development == 'app-development'){
                    it.style.display = 'none' 
                } else {
                    it.style.display = 'block'
                }                             
            })            
        })


        siteBuilding.addEventListener('click', (ev) => {
            
            // Navigation active
            ev.target.parentNode.classList.toggle('active')

    
            // Filter

            isotopeItem.forEach((it) => {
                const val = it.classList.value.split(' '),                  
                  sitebuilding = val.filter(function(v) {return v == 'site-building'})
                                 
                if(sitebuilding == 'site-building'){
                    it.style.display = 'none' 
                } else {
                    it.style.display = 'block'
                }
            })            
        })

        all.addEventListener('click', (ev) => {
            
            // Navigation active
            ev.target.parentNode.classList.toggle('active')

            // Filter

            isotopeItem.forEach((it) => { 
                    it.style.display = 'block'                
            })            
        })
})


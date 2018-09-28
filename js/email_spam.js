/**
 * Created by Stefan on 17/09/2018.
 * 
*/

{ coded = "Xjg1JJhSj11Jh0@0Xj41.wQX"
    key = "qDcpzYtJCRdyvIFimSGV30oNHBwa75KnLlurZfO4X8W2UeQ6TE9jsAkhb1MgxP"
    shift=coded.length
    link=""
    for (i=0; i<coded.length; i++) {
      if (key.indexOf(coded.charAt(i))==-1) {
        ltr = coded.charAt(i)
        link += (ltr)
        } else {    
          ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
          link += (key.charAt(ltr))
        }
    }
      document.write("<a class='btn btn--green u-align-center u-full-width' href='mailto:"+link+"'>Contacteer mij via e-mail.</a>")
}
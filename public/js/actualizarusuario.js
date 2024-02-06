$(document).ready(function(){
    //alert("estos funciona?")

    $('.btnact').on('click',function(){
    
       let btn= $('.btnact').index(this);
       let usid=$('.usid').eq(btn);
       let log=$('.log').eq(btn);
       let pas=$('.pas').eq(btn);
       let rol=$('.rol').eq(btn);
    
       let u=usid.val();
       let l=log.val();
       let p=pas.val();
       let r=rol.val();
    
      // alert(u+l+p+r);
    
    $.ajax({
    type:"POST",
    url:'/actualizarusuario',
    data:{
        uu:u,ll:l,pp:p,rr:r
    }
    
});
        
});
    
});
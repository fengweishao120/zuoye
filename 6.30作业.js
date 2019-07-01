function getKebabCase ( str ) {
    var arr = str.split('');
       str = arr.map(function ( item ){
           if( item.toUpperCase() === item ){
               return '-' + item.toLowerCase();
           }else{
               return item;
           }
       }).join( '' );
       return str;
   }
   console.log( getKebabCase( 'getName' ) ); 

   
   function getCamelCase( str ) {
    var arr = str.split( '-' );
    return arr.map( function( item, index ) {
        if( index === 0 ){
            return item;
        }else{
            return item.charAt(0).toUpperCase() + item.slice( 1 );
        }
    }).join('');
}
console.log( getCamelCase( 'get-name' ) ); 
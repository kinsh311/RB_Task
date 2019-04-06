# RoyalBrothersTask

Assumptions :
    ~ Predefined roles : admin, analyst, editor (case sensitive)
    ~ Predefined actionTypes: read , write , delete
    ~ access rights : admin - read write delete |
                      analyst - read |
                      editor - read, write
                      
                      
                     
endpoints - API :
    
    /register  -> to add user   (POST)  
        request format -> JSON (raw)
        example #
         {
            "role" : "admin",               // adding kinsh to admin
            "name" : "kinsh"
         }
         example #
         {
            "role" : "admin analyst editor",            // adding kin to multiple roles (please maintain spacein between)
            "name" : "kin"                              // can enter 2 roles also
         }
         
         response 
         # new record  // if the name entered is new in all the roles
         # registered already exists in admin analyst  // if the name already exist in admin and analyst
                                                        //if you have provided role as    "role" : "admin analyst editor"
                                                        
                                                        
    /unregister -> to remove user  (POST)
        request format -> JSON (raw)
        example #
         {
            "role" : "admin",               // removes kinsh from admin
            "name" : "kinsh"
         }
         example #
         {
            "role" : "admin analyst editor",            // removes kin from multiple roles (please maintain spacein between)
            "name" : "kin"                              // can enter 2 roles also
         }
         
         
         response
         # [name] deleted : if deletion is succesfull
         # not found :      if user doesnt belong to that role
         
             
    /authorized -> to check if the user is authorized to take actions or not  (POST)
        example #
        {                                           // only one actionType is allowed at a time 
            "ationType" : "right",
            "name" : "kin"
        }
        
        response
        #[name] can [actionType] the resource
        #[name] cannot [actionType] the resource.
      
    /flush -> to flush out db (GET)
        response database clean
        
        
TROUBLESHOOTING : 
 ~ flush out db afer some hits as the api is using mongodb atlas, which is providing limited storage
 ~ might give unintended value while in slow internet connection.
 
 
 
 contact for queries: 
 kinshuksharma311@gmail.com
         
         
         
         
         
         
         
                

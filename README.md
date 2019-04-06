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
 
    /FUTURE-ENHANCMENTS and IMPLEMENTATIONS
    ~ This api can be escalated to many practical solutions
      where there can be much more ROLES and some common/dedicated resources:
        example # 
        consider the college system where 
            ROLES -> ADMINISTRATION, ACCOUNTS, HOSTEL, LIBRARY, DEPARTMENT
            RESOURCES -> accounts_record, academics_record, student_record, assests_record
            ACTION_TYPES -> read, write, update
        Here acc. to the ROLES RESOURCES and ACTION_TYPES can be determined:
        example #
            ADMINISTRATION has access to all the resources with full control ,
            ACCOUNTS have access to accounts_record(r,w,u) and student_record(r) ,
            HOSTEL and LIBRARY can access student_record(r) and assests_record(u),
            DEPARTMENT has access to student_record(r) and academics_record(r,w,u)
                                                                            // r->read  w->write  u->update
        For above example : 
            Our current api can be modified by adding model for resources and making it as SDC(sub document collection) of ROLES,
            again using middlewares,these resources can be mapped to roles,
            finally in model.methods callback we can check the exists-in property.
    ~ this is one example where it can be implemented, although in todays world every organisation is following this architecture.

 contact for queries: 
 kinshuksharma311@gmail.com
         
         
         
         
         
         
         
                

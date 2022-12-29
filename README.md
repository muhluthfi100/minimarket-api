# minimarket-api
Simple API using MySQL and Adonis

TABLE USER

1.1.  Create User (POST : /v1/users)

   Header : None
  
   Body : 
   | No       | Key            | Value              |
   | ---------| ---------------| -------------------|
   | 1        | user_name      | string             |
   | 2        | user_birthdate | date (yyyy/mm/dd)  |
   | 3        | gender         | enum (female, male)|
  
   Response : 
   
   {
   
    "msg": "success",
    
    "data": {
    
        "user_name": "Test User 1",
        
        "user_birthdate": "1999-09-10",
        
        "gender": "male",
        
        "created_at": "2022-12-29T11:45:18.718+07:00",
        
        "updated_at": "2022-12-29T11:45:18.718+07:00",
        
        "user_id": 4
        
    }
    
  }
  
1.2. Get All User (GET : /v1/users)

   Header : None
  
   Body : None
  
   Response : 
   
   {
   
    "msg": "success",
    
    "data": [
    
        {
        
            "user_id": 4,
            
            "user_name": "Test User 1",
            
            "user_birthdate": "1999-09-09T17:00:00.000Z",
            
            "gender": "male",
            
            "created_at": "2022-12-29T11:45:18.000+07:00",
            
            "updated_at": "2022-12-29T11:45:18.000+07:00"
            
        },
        
        {
        
        "user_id": 3,
        
            "user_name": "Dina",
            
            "user_birthdate": "1999-08-31T17:00:00.000Z",
            
            "gender": "female",
            
            "created_at": "2022-12-26T15:53:35.000+07:00",
            
            "updated_at": "2022-12-26T15:53:35.000+07:00"
            
        }
        
    ]
    
    }
    
  1.3. Get User (GET : /v1/users/id)

   Header : None
  
   Body : None
  
   Response : 
   
   {
   
    "msg": "success",
    
    "data": {
        
        "user_id": 4,

        "user_name": "Test User 1",

        "user_birthdate": "1999-09-09T17:00:00.000Z",

        "gender": "male",

        "created_at": "2022-12-29T11:45:18.000+07:00",

        "updated_at": "2022-12-29T11:45:18.000+07:00"
            
    }
    
    }

1.4.  Update User (PUT : /v1/users/id)

   Header : None
  
   Body : 
   | No       | Key            | Value              |
   | ---------| ---------------| -------------------|
   | 1        | user_name      | string             |
   | 2        | user_birthdate | date (yyyy/mm/dd)  |
   | 3        | gender         | enum (female, male)|
  
   Response : 
   
   {
   
    "msg": "success",
    
    "data": {
    
        "user_id": 3,
        
        "user_name": "Update Test 2",
        
        "user_birthdate": "2001-10-22",
        
        "gender": "female",
        
        "created_at": "2022-12-26T15:53:35.000+07:00",
        
        "updated_at": "2022-12-29T11:59:35.697+07:00"
        
    }
    
   }
   
   1.5. Delete User (DELETE : /v1/users/id)

   Header : None
  
   Body : None
  
   Response : 
   
   {
   
    "msg": "User id = 3 deleted"
    
   }
   
   TABLE GOODS
   
   2.1.  Create Goods (POST : /v1/goods)

   Header : None
  
   Body : 
   | No       | Key                | Value                  |
   | ---------| -------------------| -----------------------|
   | 1        | goods_name         | string                 |
   | 2        | goods_stock        | int                    |
   | 3        | goods_type         | enum (makanan, minuman)|
   | 4        | goods_price        | int                    |
  
   Response : 
   
   {
   
    "msg": "Success",
    
    "data": {
    
        "goods_name": "Bearbrand",
        
        "goods_stock": "25",
        
        "goods_type": "minuman",
        
        "goods_price": "15200",
        
        "created_at": "2022-12-29T13:24:26.835+07:00",
        
        "updated_at": "2022-12-29T13:24:26.835+07:00",
        
        "goods_id": 4
        
    }
    
  }
  
  2.2. Get All Goods (GET : /v1/goods)

   Header : None
  
   Body : None
  
   Response :
   
   {
   
    "msg": "Success",
    
    "data": [
    
        {
        
            "goods_id": 4,
            
            "goods_name": "Bearbrand",
            
            "goods_stock": 25,
            
            "goods_type": "minuman",
            
            "goods_price": 15200,
            
            "created_at": "2022-12-29T13:24:26.000+07:00",
            
            "updated_at": "2022-12-29T13:24:26.000+07:00"
            
        }
        
       ]
       
   }
   
   2.3. Get Goods (GET : /v1/goods/id)

   Header : None
  
   Body : None
  
   Response :
   
   {
   
    "msg": "Success",
    
    "data": [
    
        {
        
            "goods_id": 4,
            
            "goods_name": "Bearbrand",
            
            "goods_stock": 25,
            
            "goods_type": "minuman",
            
            "goods_price": 15200,
            
            "created_at": "2022-12-29T13:24:26.000+07:00",
            
            "updated_at": "2022-12-29T13:24:26.000+07:00"
            
        }
        
       ]
       
   }
   
   2.4.  Update Goods (POST : /v1/goods/id)

   Header : None
  
   Body : 
   | No       | Key                | Value                  |
   | ---------| -------------------| -----------------------|
   | 1        | goods_name         | string                 |
   | 2        | goods_stock        | int                    |
   | 3        | goods_type         | enum (makanan, minuman)|
   | 4        | goods_price        | int                    |
  
   Response : 
   
   {
   
    "msg": "Success",
    
    "data": {
    
        "goods_id": 3,
        
        "goods_name": "Saos ABCDE",
        
        "goods_stock": "7",
        
        "goods_type": "makanan",
        
        "goods_price": "8000",
        
        "created_at": "2022-12-26T15:54:28.000+07:00",
        
        "updated_at": "2022-12-29T13:30:53.970+07:00"
        
    }
    
  }

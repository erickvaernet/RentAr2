async function JSONHttpRequest(method,url,body) {
    const response = await fetch(url,{
         method:method,
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify(body)
     });
     return response;
 }
 
 async function tryRequest(method,url,bodyContent,callBack){
     const response = await JSONHttpRequest(method, url, bodyContent);
     const data = await response.json();
     return callBack? callBack(data): data;
 }
 
 const request={
     
  post: async(url,bodyContent,callBack=false)=>{
     try{
         const response = await tryRequest("POST",url,bodyContent,callBack);
         return response;
     } catch (error) {
         console.error(error);
     };
  },
 
  put: async (url,bodyContent,callBack=false)=>{   
     try{
         const response = await tryRequest("PUT",url,bodyContent,callBack);
         return response;
     } catch (error) {
         console.error(error);
     };
  },
 
  patch: async(url,bodyContent,callBack=false)=>{   
     try{
         const response = await tryRequest("PATCH",url,bodyContent,callBack);
         return response;
     } catch (error) {
         console.error(error);
     };
  },
 
  get: async(url,callBack)=>{
     try {
         const response = await fetch(url);
         const data = await response.json();
         callBack(data);
     } catch (error) {
         console.error(error);
     };
 },
 
  delete: async(url,callBack)=>{
     try {
         const response = await fetch(url, {method: 'DELETE',});
         const data = await response.json();
         callBack(data);
     } catch (error) {
         console.error(error);
     };
  },
};
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
 

export const request = {

    /**
     * Esta funcion permite realizar una solicitud HTTP de tipo POST de manera simplificada
     * siempre y cuando se trabaje solamente con json
     * @param {String} url Url a la cual se hara la solicitud
     * @param {Object} bodyContent Objeto con los valores que queremos hacer post
     * @param {CallableFunction} callBack Función callback que indica que hacer con la respuesta
     * @returns {Object?}   Response
     */
  post: async(url,bodyContent,callBack=false)=>{
     try{
         const response = await tryRequest("POST",url,bodyContent,callBack);
         return response;
     } catch (error) {
         console.error(error);
     };
  },
 
  /**
     * Esta funcion permite realizar una solicitud HTTP de tipo PUT de manera simplificada
     * siempre y cuando se trabaje solamente con json
     * @param {String} url Url a la cual se hara la solicitud
     * @param {Object} bodyContent Objeto con los valores que queremos hacer put
     * @param {CallableFunction} callBack Función callback que indica que hacer con la respuesta
     * @returns {Object?}   Response
     */
  put: async (url,bodyContent,callBack=false)=>{   
     try{
         const response = await tryRequest("PUT",url,bodyContent,callBack);
         return response;
     } catch (error) {
         console.error(error);
     };
  },
 
  /**
     * Esta funcion permite realizar una solicitud HTTP de tipo PATCH de manera simplificada
     * siempre y cuando se trabaje solamente con json
     * @param {String} url Url a la cual se hara la solicitud
     * @param {Object} bodyContent Objeto con los valores que queremos hacer patch
     * @param {CallableFunction} callBack Función callback que indica que hacer con la respuesta
     * @returns {Object?}   Response
     */
  patch: async(url,bodyContent,callBack=false)=>{   
     try{
         const response = await tryRequest("PATCH",url,bodyContent,callBack);
         return response;
     } catch (error) {
         console.error(error);
     };
  },
 
  /**
     * Esta funcion permite realizar una solicitud HTTP de tipo GET de manera simplificada
     * siempre y cuando se trabaje solamente con json
     * @param {String} url Url a la cual se hara la solicitud
     * @param {CallableFunction} callBack Función callback que indica que hacer con la respuesta
     * @returns {void}
     */
  get: async(url,callBack)=>{
     try {
         const response = await fetch(url);
         const data = await response.json();
         callBack(data);
     } catch (error) {
         console.error(error);
     };
 },
 
    /**
     * Esta funcion permite realizar una solicitud HTTP de tipo DELTE de manera simplificada
     * siempre y cuando se trabaje solamente con json
     * @param {String} url Url a la cual se hara la solicitud
     * @param {CallableFunction} callBack Función callback que indica que hacer con la respuesta en caso de que exista
     * @returns {void}
     */
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
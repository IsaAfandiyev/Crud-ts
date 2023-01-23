import {northwindApiInstance} from "../core";
import {ResponseModel} from "../../models/core/ResponseModel";

export class BaseService<T> {
    private endpointUrl:string = "" ;
    constructor(url:string) {
        this.endpointUrl = url
    }

    async getAll (url:string = this.endpointUrl) : Promise<ResponseModel>{
        try {
            let apiResponse = await northwindApiInstance.get(url);

            let response:ResponseModel = {
                data:apiResponse.data,
                status:true,
                statusCode:apiResponse.status,
                errorMessage:''
            }
            return response
        }catch(error:any){
            let response:ResponseModel = {
                data:{},
                status:false,
                statusCode:error.response?.statusCode,
                errorMessage:error.message
            }
            return response
        }
    }

    async add (model:T): Promise<T> {
        let response = await northwindApiInstance.post(this.endpointUrl,model);
        let data : T = response.data;
        return data
    }

  async edit(data:T,id:number,url:string=this.endpointUrl):Promise<ResponseModel>{
      try {
          let apiResponse = await northwindApiInstance.put(url+ "/" + id,data);

          let response: ResponseModel = {
              data: apiResponse.data,
              status: true,
              statusCode: apiResponse.status,
              errorMessage: ''
          }
          return response;

      } catch (error :any) {
          let response: ResponseModel = {
              data: {},
              status: false,
              statusCode: error.response.status,
              errorMessage: error.message
          }
          return response;
      }
  }

   async delete(id:number,url:string=this.endpointUrl):Promise<ResponseModel> {
       try {
           let apiResponse = await northwindApiInstance.delete(url + "/" + id);

           let response: ResponseModel = {
               data: apiResponse.data,
               status: true,
               statusCode: apiResponse.status,
               errorMessage: ''
           }
           return response;

       } catch (error: any) {
           let response: ResponseModel = {
               data: {},
               status: false,
               statusCode: error.response.status,
               errorMessage: error.message
           }

           return response;
       }
   }
}
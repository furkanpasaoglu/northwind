import {TokenModel} from './tokenModel';
import {ResponseModel} from './responseModel';

export interface SingleResponseModel<T> extends ResponseModel{
  data:T
}

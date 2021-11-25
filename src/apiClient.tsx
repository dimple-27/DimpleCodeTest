import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';



export const useAxios = async (axiosParams: any) => {


  return new Promise((resolve, reject) => {
    axios
      .request(axiosParams)
      .then(response => {
        resolve(response?.data);
      })
      .catch(error => {
        console.log('API Erro', error);
        if (error.response?.status.toString().includes('5')) {
          let errObj = {
            code: 5000,
            status: false,
            message: 'Something went wrong',
            data: {},
          };
          reject(JSON.stringify(errObj));
        } else {
          reject(JSON.stringify(error?.response?.data));
        }
      });
  });
};

export const isJson = (data: any) => {
  if (typeof data === 'object') {
    console.log('Return TRUE');
    return true;
  } else {
    console.log('Return False');
    return false;
  }
  // if(data instanceof Object){
  //   console.log("Return TRUE")
  //   return true;
  // } else{
  //   console.log("Return False")
  //   return false;
  // }
};

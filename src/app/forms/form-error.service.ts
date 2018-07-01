import { Injectable } from '@angular/core'
import { FormControl } from '@angular/forms'

interface MinLengthErrDetail {
  requiredLength: number
  actualLength: number
}

@Injectable({
  providedIn: 'root',
})
export class FormErrorService {
  constructor() {}

  public static getErrorMessage(formControl: FormControl) {
    const errors = formControl.errors
    let errorMsg
    let errorDetails

    if (errors) {
      for (const error in errors) {
        if (errors.hasOwnProperty(error)) {
          switch (error) {
            case 'minlength':
              errorDetails = <MinLengthErrDetail>errors[error]
              errorMsg = `Search term is only ${
                errorDetails.actualLength
              } character(s) long and must be at least ${
                errorDetails.requiredLength
              } character(s) long.`
              break
            default:
          }
        }
      }
    }

    return errorMsg
  }
}

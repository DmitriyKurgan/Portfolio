import React from 'react';
import {strings} from "./initialization.ts";


export const createField = (fieldName: string, fieldType: string, formik: any, inputClassName?: string, labelClassName?: string) => {
    const placeholderCreator = (fieldName: string) => {
        debugger
        switch (fieldName) {
            case 'name':
                return strings.contactsBlock.formPlaceholders.name;
            case 'email':
                return strings.contactsBlock.formPlaceholders.email;
            case 'message':
                return strings.contactsBlock.formPlaceholders.message;
            default:
                return ''
        }
    }
    return (<>
            {fieldType !== 'textarea'
                ? <>
                    <input
                        id={fieldName}
                        type={fieldType}
                        placeholder={placeholderCreator(fieldName)}
                        className={inputClassName}
                        {...formik.getFieldProps(fieldName)}
                        required={false}
                    />
                </>
                : <>
                    <textarea
                        id={fieldName}
                        type={fieldType}
                        placeholder={placeholderCreator(fieldName)}
                        {...formik.getFieldProps(fieldName)}
                        required={false}
                    />
                </>
            }

        </>
    )
}
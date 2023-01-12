
import React from 'react';

export const createField = (fieldName: string, fieldType: string, formik: any, inputClassName?:string,labelClassName?:string) => {
    let fieldTitle = fieldName[0].toUpperCase() + fieldName.slice(1);
    return (<>
            {fieldType !== 'textarea'
                ? <>
                    <input
                        id={fieldName}
                        type={fieldType}
                        placeholder={`Enter your ${fieldName}..`}
                        className={inputClassName}
                        {...formik.getFieldProps(fieldName)}
                        required={false}
                    />
                </>
                : <>
                    <textarea
                        id={fieldName}
                        type={fieldType}
                        placeholder={`Enter your ${fieldName}..`}
                        {...formik.getFieldProps(fieldName)}
                        required={false}
                    />
                </>
            }

        </>
    )
}
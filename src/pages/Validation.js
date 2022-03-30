import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

export default function Validation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <Form style={{maging: 5,}} onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Name</label>
                    <input style={{margin:21, width:315,marginLeft: 85}}
                        type="text"
                        {...register("firstName", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.firstName && <p style={{color:'red'}}>Please check the First Name</p>}
                <Form.Field>
                    <label>SurName</label>
                    <input  style={{margin:10, width:315,marginLeft: 65}}
                        
                        type="text"
                        {...register("lastName", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.lastName && <p  style={{color:'red'}}>Please check the Last Name</p>}
                <Form.Field>
                    <label>Email</label>
                    <input  style={{margin:10, marginLeft: 95, width:315}}
                        
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <p  style={{color:'red'}}>Please check the Email</p>}
                <Form.Field>
                    <label>Phone Number</label>
                    <input  style={{margin:10, marginLeft: 25,width:315}}
                        
                        type="password"
                        {...register("password", 
                           
                            { required: true, maxLength: 10 }
                        )}
                    />
                </Form.Field> 
                {errors.password && <p  style={{color:'red'}}>Please enter nmbers</p>}
                <Button style={{margin:30, width: 200, height: 50, backgroundColor: 'gray', color: 'white', borderRadius: 10}} type='submit'>Comfirm Details</Button>
            </Form>  
        </div>
    )

    
}

import {Button, FormGroup, Input, Label, FormFeedback} from "reactstrap";
import { Formik, Field, Form } from 'formik';

const Entry = ({data, setData}) => {
    return (
        <Formik
        initialValues={{
            name: 'Zoltán',
            number: 10,
            confirm: true
          }}
          validate={values => {
            const errors = {};
            if (!values.name)
                errors.name = "Name must be set";
            if (!values.number)
                errors.number = "Number must be set";
            if (values.number < 0)
                errors.number = "Number should be above zero";
            if (values.confirm === false)
                errors.confirm = "Confirm it";
            return errors;
          }}
          onSubmit={values => 
            setData(values)
          }
        >
            {({isSubmitting, errors, touched, values, setFieldValue, handleBlur, isValid, dirty}) => (
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input 
                        tag={Field}
                        name="name" 
                        id="name" 
                        placeholder="Adam" 
                        invalid={errors.name !== undefined}
                        valid={errors.name === undefined}
                    />
                    {errors.name ? <FormFeedback invalid>{errors.name}</FormFeedback> : null}
                </FormGroup>
                <FormGroup>
                    <Label for="number">Number</Label>
                    <Input 
                        tag={Field}
                        type="number" 
                        name="number" 
                        id="number" 
                        placeholder="#" 
                        invalid={errors.number !== undefined}
                        valid={errors.number === undefined}
                    />
                    {errors.number ? <FormFeedback invalid>{errors.number}</FormFeedback> : null}
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input 
                            tag={Field}
                            id="confirm"
                            name="confirm"
                            type="checkbox"
                            invalid={errors.check !== undefined}
                            valid={errors.check === undefined} 
                        />{' '}
                        Confirm
                        {errors.confirm ? <FormFeedback invalid>{errors.confirm}</FormFeedback> : null}
                    </Label>
                </FormGroup>
                <div>
                    <Button type="submit" color="primary">Submit</Button>
                    <Button onClick={e=>setFieldValue("number", Math.floor(100 * Math.random()),true)}>Random</Button>
                </div>
            </Form>
            )}
        </Formik>
    )
}

export default Entry;
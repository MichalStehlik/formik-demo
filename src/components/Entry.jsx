import {Button, Form, FormGroup, Input, Label, FormFeedback} from "reactstrap";
import { useFormik } from 'formik';

const validate = values => {
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
}

const Entry = ({data, setData}) => {
    const formik = useFormik({
        initialValues: {
          name: 'Zoltán',
          number: 10,
          confirm: true
        },
        validate: validate,
        onSubmit: values => {
          setData(values);
        },
    });
    console.log(formik);
    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input 
                        name="name" 
                        id="name" 
                        placeholder="Adam" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        invalid={Boolean(formik.errors.name)} 
                        valid={formik.touched.name} 
                    />
                    {formik.errors.name ? <FormFeedback invalid>{formik.errors.name}</FormFeedback> : null}
                </FormGroup>
                <FormGroup>
                    <Label for="number">Number</Label>
                    <Input 
                        type="number" 
                        name="number" 
                        id="number" 
                        placeholder="#" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.number} 
                        invalid={Boolean(formik.errors.number)} 
                        valid={formik.touched.number}
                    />
                    {formik.errors.number ? <FormFeedback invalid>{formik.errors.number}</FormFeedback> : null}
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input 
                            id="confirm"
                            name="confirm"
                            type="checkbox" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            checked={formik.values.confirm} 
                            invalid={Boolean(formik.errors.confirm)} 
                            valid={formik.touched.confirm}
                        />{' '}
                        Confirm
                        {formik.errors.confirm ? <FormFeedback invalid>{formik.errors.confirm}</FormFeedback> : null}
                    </Label>
                </FormGroup>
                <div>
                    <Button type="submit" color="primary">Submit</Button>
                    <Button onClick={e=>{formik.setValues({...formik.values, number: Math.floor(100 * Math.random())})}}>Random</Button>
                </div>
            </Form>
        </>
    )
}

export default Entry;
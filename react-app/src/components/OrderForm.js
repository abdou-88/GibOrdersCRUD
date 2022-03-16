import React, { useEffect } from "react";
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/order";
import { useToasts } from "react-toast-notifications";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialFieldValues = {
  orderType: "",
  clientID: "",
  oImagePath: "",
  oVideoPath: "",
  locationId: "",
  oComment: "",
};

const OrderForm = ({ classes, ...props }) => {

    //toast msg.
    const { addToast } = useToasts()

    //validate()
    //validate({orderType:'jenny'})
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('orderType' in fieldValues)
            temp.orderType = fieldValues.orderType ? "" : "This field is required."
        if ('clientID' in fieldValues)
            temp.clientID = fieldValues.clientID ? "" : "This field is required."
        if ('locationId' in fieldValues)
            temp.locationId = fieldValues.locationId ? "" : "This field is required."
        if ('oImagePath' in fieldValues)
            temp.oImagePath = (/^$|.+@.+..+/).test(fieldValues.oImagePath) ? "" : "oImagePath is not valid."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, validate, props.setCurrentId)

    //material-ui select
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const onSuccess = () => {
                resetForm()
                addToast("Order submitted successfully", { appearance: 'success' })
            }
            if (props.currentId === 0)
                props.createOrder(values, onSuccess)
            else
                props.updateOrder(props.currentId, values, onSuccess)
        }
    }

    useEffect(() => {
        if (props.currentId !== 0) {
            setValues({
                ...props.orderList.find(x => x.id === props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])

    return (
      <form
        autoComplete="off"
        noValidate
        className={classes.root}
        onSubmit={handleSubmit}
      >
        <Grid container>
          <Grid item xs={6}>
            <TextField
              name="orderType"
              variant="outlined"
              label="Order Type"
              value={values.orderType}
              onChange={handleInputChange}
              {...(errors.orderType && {
                error: true,
                helperText: errors.orderType,
              })}
            />
            <TextField
              name="oImagePath"
              variant="outlined"
              label="Image URL"
              value={values.oImagePath}
              onChange={handleInputChange}
              {...(errors.oImagePath && {
                error: true,
                helperText: errors.oImagePath,
              })}
            />
            <FormControl
              variant="outlined"
              className={classes.formControl}
              {...(errors.locationId && { error: true })}
            >
              <InputLabel ref={inputLabel}>Location</InputLabel>
              <Select
                name="locationId"
                value={values.locationId}
                onChange={handleInputChange}
                labelWidth={labelWidth}
              >
                <MenuItem value="">Select Location</MenuItem>
                <MenuItem value="MS1">MS1</MenuItem>
                <MenuItem value="MS2">MS2</MenuItem>
                <MenuItem value="MS3">MS3</MenuItem>
                <MenuItem value="MS4">MS4</MenuItem>
                <MenuItem value="AP1">AP1</MenuItem>
                <MenuItem value="AP2">AP2</MenuItem>
              </Select>
              {errors.locationId && (
                <FormHelperText>{errors.locationId}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="clientID"
              variant="outlined"
              label="Client ID"
              value={values.clientID}
              onChange={handleInputChange}
              {...(errors.clientID && {
                error: true,
                helperText: errors.clientID,
              })}
            />
            <TextField
              name="oVideoPath"
              variant="outlined"
              label="Video Path"
              value={values.oVideoPath}
              onChange={handleInputChange}
            />
            <TextField
              name="oComment"
              variant="outlined"
              label="Comment"
              value={values.oComment}
              onChange={handleInputChange}
            />
            <div>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.smMargin}
              >
                Submit
              </Button>
              <Button
                variant="contained"
                className={classes.smMargin}
                onClick={resetForm}
              >
                Reset
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    );
}


const mapStateToProps = state => ({
    orderList: state.order.list
})

const mapActionToProps = {
    createOrder: actions.create,
    updateOrder: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(OrderForm));
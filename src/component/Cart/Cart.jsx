import React from 'react'
import CartItem from './CartItem';
import { AddressCard } from './AddressCard'; // 👈 ถ้า AddressCard เป็น named export
import { Card, Button, Modal, Box,Divider,TextField,Grid } from '@mui/material';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import{ AddLocation } from "@mui/icons-material";
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from "yup";

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400',        
    bgcolor: 'background.paper',
    outline: "none",

    boxShadow: 24,
    p: 4,
};

const initialValues = {
    streetAddress: "",
    state: "",
    pincode: "",
    city: ""
};

// const validationSchema = Yup.object().shape({
//   streetAddress: Yup.string().required("Street address is required"),
//   state: Yup.string().required("State is required"),
//   pincode: Yup.string().required("Pincode is required"),
//   city: Yup.string().required("City is required")
// });

const items = [1, 1];

const Cart = () => {
    const createOrderUsingSelectedAddress = () => { };
    const handleOpenAddressModel = () => setOpen(true);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);
    const handleSubmit = (values) => {
        console.log("form Values:", values);
        handleClose();
    };




    return (
        <>
            <main className="lg:flex justify-between">
                <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
                    {items.map((item, index) => (<CartItem key={index} />))}
                    <Divider />
                    <div className="billlDetails px-5 text-sm">
                        <p className="font-extrelight py-5">Bill Details</p>
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-400">
                                <p>Item Total</p>
                                <p>207 THB</p>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>Deliver Fee</p>
                                <p>21 THB</p>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>GST and Restaurant Charges</p>
                                <p>32 THB</p>
                            </div>
                            <Divider />
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <p>Total pay</p>
                            <p>260 THB</p>
                        </div>
                    </div>
                </section>
                <Divider orientation="vertical" flexItem />
                <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
                    <div>
                        <h1 className="text-center font-semibold text-2xl py-10">
                            Choose Delivery Address
                        </h1>
                        <div className="flex gap-5 flex-wrap justify-center">
                            {[1, 1, 1, 1, 1].map((item, idx) => (
                                <AddressCard
                                    key={idx}
                                    handleSelectAddress={createOrderUsingSelectedAddress}
                                    item={item}
                                    showButton={true}
                                />
                            ))}
                            <Card className="flex gap-5 w-64 p-5 items-start flex-col bg-gray-800">
                                <div className="flex items-center gap-2 mb-2">
                                    <AddLocationAltIcon />
                                    <h1 className="font-semibold text-lg text-white whitespace-nowrap">
                                        Add New Address
                                    </h1>
                                </div>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    onClick={handleOpenAddressModel}
                                    sx={{ backgroundColor: '#EC4899', '&:hover': { backgroundColor: '#DB2777' } }}
                                    className="mt-3"
                                >
                                    Add
                                </Button>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>

            <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 380,
      bgcolor: "#111", // ✅ พื้นหลังดำเข้ม
      borderRadius: 3, // ✅ มุมโค้ง
      boxShadow: 24,
      p: 4,
    }}
  >
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <Field
                as={TextField}
                name="streetAddress"
                label="Street Address"
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: "#ccc" } }}
                InputProps={{
                  style: { color: "white", borderColor: "#555" },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                as={TextField}
                name="state"
                label="State"
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: "#ccc" } }}
                InputProps={{
                  style: { color: "white", borderColor: "#555" },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                as={TextField}
                name="city"
                label="City"
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: "#ccc" } }}
                InputProps={{
                  style: { color: "white", borderColor: "#555" },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                as={TextField}
                name="pincode"
                label="Pincode"
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: "#ccc" } }}
                InputProps={{
                  style: { color: "white", borderColor: "#555" },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                sx={{
                  backgroundColor: "#e91e63", // ✅ สีชมพูเข้ม
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: "#d81b60",
                  },
                  paddingY: 1.2,
                }}
              >
                DELIVER HERE
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  </Box>
</Modal>

        </>
    );
}

export default Cart;

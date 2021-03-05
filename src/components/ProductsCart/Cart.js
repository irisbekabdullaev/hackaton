import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { cartContext } from '../../contexts/CartContext'
import { Button, Typography, IconButton, } from '@material-ui/core';
import ShopIcon from '@material-ui/icons/Shop';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import NavbarProducts from '../Navbar/NavbarProducts';



const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(id, image, title, price, quantity, total) {
    return { id, image, title, price, quantity, total };
}

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function Cart() {
    const classes = useStyles();
    const { cart, decreaseProductQuantity, removeProductFromCart, increaseProductQuantity, cartTotal } = useContext(cartContext);
    console.log(cart)
    const rows = cart.map(product => createData(product.id, product.img, product.name, product.price, product.quantity, parseInt(product.price) * product.quantity))
    console.log(rows)
    localStorage.setItem('cartToCheck', JSON.stringify(rows));
    return (
<>
<NavbarProducts />
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Изображение</StyledTableCell>
                        <StyledTableCell>Товар</StyledTableCell>
                        <StyledTableCell>Цена</StyledTableCell>
                        <StyledTableCell>Кол-во</StyledTableCell>
                        <StyledTableCell>Сумма к оплате</StyledTableCell>
                        <StyledTableCell>Удаление</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                <img src={row.image} alt="image" style={{ width: "100px", height: "100px" }} />
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {row.title}
                            </StyledTableCell>
                            <StyledTableCell>{row.price}</StyledTableCell>
                            <StyledTableCell>
                                <Button onClick={() => {
                                    if (row.quantity === 1) {
                                        return
                                    }
                                    return decreaseProductQuantity(row.id)
                                }} style={{ minWidth: 10, marginRight: 5 }}>
                                    -
                                    </Button>
                                {row.quantity}
                                <Button onClick={() => increaseProductQuantity(row.id)} style={{ minWidth: 10, marginLeft: 5 }}>
                                    +
                                    </Button>
                            </StyledTableCell>
                            <StyledTableCell>{row.total}</StyledTableCell>
<StyledTableCell>
                                <IconButton onClick={() => removeProductFromCart(row.id)} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            <IconButton >
                <Link to="/checkout">
                    <ShopIcon />
                </Link>
            </IconButton>
            <IconButton>
                <Typography style={{ marginTop: 1, textAlign: 'right', marginRight: 20 }}>
                    Итого к оплате: {cartTotal}
                </Typography>
            </IconButton>

        </TableContainer>
        </>
    );
}
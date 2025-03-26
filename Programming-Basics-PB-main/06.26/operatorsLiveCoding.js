    /*
    Your shopping basket has
    - 1x Coffee               7€ each
    - 4x Energy drink         2€ each
    - 2x Cola                 1€ each
    - 1x Earl Grey Tea        4€ each
    - 1x Yerba Mate           4€ each
    - 4x Chocolate            2€ each
    */

    const numberOfItems = 1 + 4 + 2 + 1 + 1 + 4
    console.log("numberOfItems", numberOfItems)

    const total = 1*7 + 4*2 + 2*1 + 1*4 + 1*4 + 4*2
    console.log("total", total)


    //we used toFixed(2) to only return the first two decimals in line 20
    const totalWithDiscount = total - total * 0.2 //20% discount
    const totalWithDiscount2 = (total * 0.8).toFixed(2) //20% discount
    console.log("totalWithDiscount", totalWithDiscount)
    console.log("totalWithDiscount2", totalWithDiscount2)

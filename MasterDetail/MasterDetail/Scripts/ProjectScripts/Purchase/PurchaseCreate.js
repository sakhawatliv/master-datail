$("#AddButton").click(function() {
    createRowForPurchase();
});

function createRowForPurchase()
{
    var selectedItem = getSelectedItem();

    var index = $("#PurchaseDetailsTable").children("tr").length;

    var sl = index;

    var indexCell = "<td style='display:none'><input type='hidden' id='Index" + index + "' name = 'PurchaseDetailses.Index' value = '" + index + "'/></td>";
    var serialCell = "<td>" + (++sl) + "</td>";
    var itemNameCell = "<td><input type ='hidden' id ='ItemName" + index + "' name = 'PurchaseDetailses[" + index + "].Name' value ='" + selectedItem.ItemName + "'/>" + selectedItem.ItemName + "</td>";
    var itemQtyCell = "<td><input type ='hidden' id ='ItemQty" + index + "' name = 'PurchaseDetailses[" + index + "].Qty' value ='" + selectedItem.ItemQty + "'/>" + selectedItem.ItemQty + "</td>";
    var itemPriceCell = "<td><input type ='hidden' id ='ItemPrice" + index + "' name = 'PurchaseDetailses[" + index + "].Price' value ='" + selectedItem.ItemPrice + "'/>" + selectedItem.ItemPrice + "</td>";


    var createNewRow = "<tr>" + indexCell + serialCell + itemNameCell + itemQtyCell + itemPriceCell + "</tr>";
    $("#PurchaseDetailsTable").append(createNewRow);
    $("#ItemName").val("");
    $("#ItemQty").val("");
    $("#ItemPrice").val("");


}

function getSelectedItem() {
    var itemName = $("#ItemName").val();
    var itemQty = $("#ItemQty").val();
    var itemPrice = $("#ItemPrice").val();


    var item = {
        "ItemName": itemName,
        "ItemQty": itemQty,
        "ItemPrice": itemPrice
    }
    return item;
}

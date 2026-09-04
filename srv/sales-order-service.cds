@requires: 'authenticated-user'
service SalesOrderService @(path: '/sales-order') {

  /** Fetches a sales order from the BTP destination-backed API and returns it as raw JSON. */
  function get_sales_order() returns LargeString;
}

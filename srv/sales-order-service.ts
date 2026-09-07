import cds from '@sap/cds'

export default class SalesOrderService extends cds.ApplicationService {
  async init() {
    // Resolves to the "CloudIntegrationRuntime" entry in package.json (cds.requires)
    const remote = await cds.connect.to('CloudIntegrationRuntime')

    this.on('get_sales_order', async () => {
      const order = await remote.send({ method: 'GET', path: '/http/ch/s4/saml2bearer/salesorder' })
      return order
    })

    return super.init()
  }
}

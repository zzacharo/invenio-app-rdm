export class DepositApiController {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  exists(record) {
    return record.id ? true : false;
  }

  async save(record) {
    let payload = record;
    if (!this.exists(record)) {
      payload = await this.apiClient.create(record);
      window.history.replaceState(undefined, "", payload.links.edit);
    }
    return this.apiClient.save(payload);
  }

  async publish(record) {
    let payload = record;
    if (!this.exists(record)) {
      payload = await this.apiClient.create(record);
      window.history.replaceState(undefined, "", payload.links.edit);
    }
    console.log("Record to publish", payload);

    return this.apiClient.publish(payload);
  }
}

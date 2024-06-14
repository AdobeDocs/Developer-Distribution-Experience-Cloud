# Required Products

Developers of distributable App Builder apps can define Adobe products that are required for their apps to work properly.

Required products show up on the app's listing page in Exchange and allow apps to be discoverable when customers filter for particular Adobe products on the marketplace. Customers will also be asked to confirm that they have purchased the required products before acquiring an app. 

See [Discover](../discoverandmanage.md#discover) and [Acquire](../discoverandmanage.md#acquire) for more information on how these options surface to customers. 

## Defining required products

Required products can be defined via the `productDependencies` property.

**app.config.yaml**

```yaml
application:
  <application config>
extensions:
  <extension configs>
configSchema: 
  <customer configuration>
productDependencies: 
  - code: AEP
    minVersion: 0.0.0
    maxVersion: 1.0.0
```

*TODO: Help customers find product codes and available versions* 

import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { formatOrderId, formatPrice } from "../../../../utils/utils";
import { IInvoiceProps } from "../types";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    fontSize: 14,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  item: { flex: 1 },
  divider: { marginBottom: 10 },
  total: { marginRight: 5 },
  tableHeader: { marginBottom: 8 },
  tableRow: { marginBottom: 5 },
  text: {
    fontSize: 14,
  },
  invoice: { fontSize: 16, textAlign: "right" },
  fromAddress: { marginBottom: 18 },
  blackLine: { border: "1px solid black", marginBottom: 10 },
  lineMarginTop: { marginTop: 10 },
});

const Invoice = ({ orderDetails }: IInvoiceProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ ...styles.divider, ...styles.invoice }}>INVOICE</Text>
          <Text>Comfy Decor</Text>
          <Text>Silver Amnora, 1st Floor</Text>
          <Text style={styles.fromAddress}>Kothrud, Pune - 411046</Text>
          <Text>
            {orderDetails?.firstName} {orderDetails?.lastName}
          </Text>
          <Text>{orderDetails?.streetName}</Text>
          <Text style={styles.fromAddress}>
            {orderDetails?.city} - {orderDetails?.postalCode},{" "}
            {orderDetails?.country}
          </Text>
          <View style={styles.blackLine} />
          <Text style={{ ...styles.divider }}>
            Invoice Number {orderDetails?._id.slice(0, 5).toUpperCase()}
          </Text>
          <Text style={{ ...styles.divider }}>
            Order Number {formatOrderId(orderDetails?._id || "")}
          </Text>
          <View style={styles.divider} />
          <Text style={{ ...styles.divider }}>Order Items</Text>
          <View style={{ ...styles.container, ...styles.tableHeader }}>
            <Text style={{ ...styles.item }}>Serial No.</Text>
            <Text style={{ ...styles.item }}>Quantity</Text>
            <Text style={{ ...styles.item }}>Subtotal</Text>
          </View>
          {orderDetails?.orderItems.map((item, index) => (
            <View
              style={{ ...styles.container, ...styles.tableRow }}
              key={`cart-item-${index}`}
            >
              <Text style={{ ...styles.item }}>{index + 1}.</Text>
              <Text style={{ ...styles.item }}>{item.quantity}</Text>
              <Text style={{ ...styles.item }}>
                {formatPrice(item.subtotal.toString())}
              </Text>
            </View>
          ))}
          <Text style={styles.divider} />
          <View style={styles.blackLine} />
          <View style={{ ...styles.container, justifyContent: "flex-end" }}>
            <Text style={styles.total}>Total</Text>
            <Text>{formatPrice(orderDetails?.totalCost || "")}</Text>
          </View>
          <View style={{ ...styles.blackLine, ...styles.lineMarginTop }} />
        </View>
      </Page>
    </Document>
  );
};

export default Invoice;

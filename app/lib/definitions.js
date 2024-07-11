export const User = {
    id,
    name,
    email,
    password,
};

export const Customer = {
    id,
    name,
    email,
    image_url,
};

export const Invoice = {
    id,
    customer_id,
    amount,
    date,
    status: 'pending' | 'paid',
};

export const Revenue = {
    month,
    revenue,
};

export const LatestInvoice = {
    id,
    name,
    image_url,
    email,
    amount,
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export const LatestInvoiceRaw = {
    amount,
};

export const InvoicesTable = {
    id,
    customer_id,
    name,
    email,
    image_url,
    date,
    amount,
    status: 'pending' | 'paid',
};

export const CustomersTableType = {
    id,
    name,
    email,
    image_url,
    total_invoices,
    total_pending,
    total_paid,
};

export const FormattedCustomersTable = {
    id,
    name,
    email,
    image_url,
    total_invoices,
    total_pending,
    total_paid,
};

export const CustomerField = {
    id,
    name,
};

export const InvoiceForm = {
    id,
    customer_id,
    amount,
    status: 'pending' | 'paid',
};

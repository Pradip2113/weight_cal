// Copyright (c) 2023, Abhishek Chougule and contributors
// For license information, please see license.txt

frappe.ui.form.on('Weight Bridge', {
	onload: function (frm) {
		frm.call({
			method:'get_bridge_info',
			doc: frm.doc,
		});
	}
})

frappe.ui.form.on('Delivery Note Item', {
	rate: function (frm) {
		frm.call({
			method:'setamt',
			doc: frm.doc,
		});
	}
})


frappe.ui.form.on('Weight Bridge', {
	onload: function (frm) {
		frm.call({
			method:'get_empty_weight',
			doc: frm.doc,
		});
	}
})

frappe.ui.form.on('Weight Bridge', {
	get_loaded_weight: function (frm) {
		// frm.fields_dict.get_loaded_weight.$wrapper.hide();
		frm.call({
			method:'get_loaded_weight',
			doc: frm.doc,
		});
	}
})

frappe.ui.form.on('Weight Bridge', {
	get_loaded_weight: function (frm,cdt,cdn) {
		// frm.fields_dict.get_loaded_weight.$wrapper.hide();
		frm.call({
			method:'get_qty',
			doc: frm.doc,cdt,cdn
		});
	}
})

frappe.ui.form.on('Weight Bridge', {
	loaded_weight: function (frm,cdt,cdn) {
		// frm.fields_dict.get_loaded_weight.$wrapper.hide();
		frm.call({
			method:'get_qty',
			doc: frm.doc,cdt,cdn
		});
	}
})

frappe.ui.form.on('Weight Bridge', {
	empty_weight: function (frm,cdt,cdn) {
		// frm.fields_dict.get_loaded_weight.$wrapper.hide();
		frm.call({
			method:'get_qty',
			doc: frm.doc,cdt,cdn
		});
	}
})


frappe.ui.form.on('Weight Bridge', {
	get_empty_weight: function (frm,cdt,cdn) {
		// frm.fields_dict.get_loaded_weight.$wrapper.hide();
		frm.call({
			method:'get_qty',
			doc: frm.doc,cdt,cdn
		});
	}
})


frappe.ui.form.on('Weight Bridge', {
	get_loaded_weight: function (frm) {
		frm.call({
			method:'get_actual_weight',
			doc: frm.doc,
		});
	}
})

frappe.ui.form.on('Weight Bridge', {
	get_empty_weight: function (frm) {
		frm.call({
			method:'get_empty_weight',
			doc: frm.doc,
		});
	}
})

frappe.ui.form.on('Weight Bridge', {
	get_empty_weight: function (frm) {
		frm.call({
			method:'get_actual_weight',
			doc: frm.doc,
		});
	}
})
frappe.ui.form.on('Delivery Note Item', {
	item_code: function (frm) {
		frm.call({
			method:'get_qty',
			doc: frm.doc,
		});
	}
})

frappe.ui.form.on('Weight Bridge', {
	loaded_weight: function (frm,cdt,cdn) {
		// frm.fields_dict.get_loaded_weight.$wrapper.hide();
		frm.call({
			method:'get_actual_weight',
			doc: frm.doc,cdt,cdn
		});
	}
})
frappe.ui.form.on('Weight Bridge', {
	empty_weight: function (frm,cdt,cdn) {
		// frm.fields_dict.get_loaded_weight.$wrapper.hide();
		frm.call({
			method:'get_actual_weight',
			doc: frm.doc,cdt,cdn
		});
	}
})


frappe.ui.form.on("Weight Bridge", {
	setup: function(frm) {
		frm.set_indicator_formatter('item_code',
			function(doc) {
				return (doc.docstatus==1 || doc.qty<=doc.actual_qty) ? "green" : "orange"
			})
		}
	});

// frappe.ui.form.on('Weight Bridge', {
// 	onload: function (frm) {
// 		frm.call({
// 			method:'get_bridge_info',
// 			doc: frm.doc,
// 		});
// 	}
// });

// frappe.ui.form.on('Weight Bridge', {
// 	get_loaded_weight: function (frm) {
// 		frm.call({
// 			method:'get_loaded_weight',
// 			doc: frm.doc,
// 		});
// 	}
// });

// frappe.ui.form.on('Weight Bridge', {
// 	get_empty_weight: function (frm) {
// 		frm.call({
// 			method:'get_empty_weight',
// 			doc: frm.doc,
// 		});
// 	}
// });

// frappe.ui.form.on('Weight Bridge', {
// 	get_actual_weight: function (frm) {
// 		frm.call({
// 			method:'get_actual_weight',
// 			doc: frm.doc,
// 		});
// 	}
// });


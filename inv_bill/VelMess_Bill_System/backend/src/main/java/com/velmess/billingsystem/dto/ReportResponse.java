package com.velmess.billingsystem.dto;

import com.velmess.billingsystem.model.Order;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReportResponse {
    private List<Order> orders;
    private Double totalCollection;
    private Map<String, Double> byPaymentMode;
}

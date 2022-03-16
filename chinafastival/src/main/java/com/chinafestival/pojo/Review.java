package com.chinafestival.pojo;


public class Review {

  private int r_id;
  private String d_dateime;
  private int d_id;
  private String d_details;
  private String u_id;

  public Review() {
  }

  @Override
  public String toString() {
    return super.toString();
  }



  public int getR_id() {
    return r_id;
  }

  public void setR_id(int r_id) {
    this.r_id = r_id;
  }

  public String getD_dateime() {
    return d_dateime;
  }

  public void setD_dateime(String d_dateime) {
    this.d_dateime = d_dateime;
  }

  public int getD_id() {
    return d_id;
  }

  public void setD_id(int d_id) {
    this.d_id = d_id;
  }

  public Review(int r_id, String d_dateime, int d_id, String d_details, String u_id ) {
    this.r_id = r_id;
    this.d_dateime = d_dateime;
    this.d_id = d_id;
    this.d_details = d_details;
    this.u_id = u_id;

  }

  public String getD_details() {
    return d_details;
  }

  public void setD_details(String d_details) {
    this.d_details = d_details;
  }

  public String getU_id() {
    return u_id;
  }

  public void setU_id(String u_id) {
    this.u_id = u_id;
  }
}

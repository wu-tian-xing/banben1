package com.chinafestival.pojo;


public class ReviewView {

  private String u_name;
  private String headphoto;
  private int r_id;
  private String d_dateime;
  private int d_id;
  private String d_details;


  public ReviewView() {
  }

  @Override
  public String toString() {
    return super.toString();
  }

  public String getHeadphoto() {
    return headphoto;
  }

  public void setHeadphoto(String headphoto) {
    this.headphoto = headphoto;
  }


  public String getU_name() {
    return u_name;
  }

  public void setU_name(String u_name) {
    this.u_name = u_name;
  }

  public int getR_id() {
    return r_id;
  }

  public void setR_id(int r_id) {
    this.r_id = r_id;
  }

  public int getD_id() {
    return d_id;
  }

  public void setD_id(int d_id) {
    this.d_id = d_id;
  }

  public String getD_dateime() {
    return d_dateime;
  }

  public void setD_dateime(String d_dateime) {
    this.d_dateime = d_dateime;
  }

  public String getD_details() {
    return d_details;
  }

  public void setD_details(String d_details) {
    this.d_details = d_details;
  }
}

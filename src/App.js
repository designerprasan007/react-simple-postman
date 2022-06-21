import axios from "axios";
import React, { useState } from "react";
import ApiHeader from "./Components/ApiHeader/ApiHeader";
import ParamsHeader from "./Components/ParamsHeader/ParamsHeader";
import Response from "./Components/Response/Response";
const App = () => {
  const [hitApi, setHitApi] = useState({
    apiValue: "",
    method: "GET",
  });
  const [headersData, setHeadersData] = useState([
    {
      key: "auth",
      value: "abcdef",
    },
  ]);
  const [jsonData, setJsonData] = useState("");
  const [responseData, setResponseData] = useState("");
  const handleHeaderChange = (event, index) => {
    const name = event.target.name;
    const value = event.target.value;
    let preValues = [...headersData];
    preValues[index][name] = value;
    setHeadersData(preValues);
  };
  const handleAddRow = () => {
    const isEmptyField = headersData.some(
      (val) => val.key === "" || val.value === ""
    );
    if (!isEmptyField) {
      setHeadersData([...headersData, { key: "", value: "" }]);
    } else {
      alert("Fill all empty fields");
    }
  };
  const removeHeaderValue = (index) => {
    setHeadersData((prevState) =>
      prevState.filter((prevItem, i) => i !== index)
    );
  };

  const handleFormData = (event) => {
    setJsonData(event.target.value);
  };

  const handleApiCall = (event, method) => {
    if (method) {
      setHitApi({ ...hitApi, method: event.target.value });
    } else {
      setHitApi({ ...hitApi, apiValue: event.target.value });
    }
  };

  const sendRequest = async () => {
    try {
      let data = JSON.parse(jsonData) || null;
    } catch (err) {
      alert("JSON data is malformed!!");
      return;
    }

    const request_start_at = new Date().getTime();
    try {
      const data = await axios({
        url: hitApi.apiValue,
        method: hitApi.method,
        data: jsonData,
      });
      const request_end_at = new Date().getTime();
      const request_duration = request_end_at - request_start_at;
      data.config.spentTime = request_duration;
      const responseSize =
        JSON.stringify(data.data).length + JSON.stringify(data.headers).length;
      data.config.totalSize = responseSize;
      console.log();
      setResponseData(data);
    } catch (err) {
      const request_end_at = new Date().getTime();
      const request_duration = request_end_at - request_start_at;
      err.config.spentTime = request_duration;
      err.config.totalSize = 0;
      setResponseData(err.response);
    }
  };

  return (
    <div className="p-3">
      <ApiHeader
        hitApi={hitApi}
        handleApiCall={handleApiCall}
        sendRequest={sendRequest}
      />
      <ParamsHeader
        headersData={headersData}
        handleHeaderChange={handleHeaderChange}
        handleAddRow={handleAddRow}
        removeHeaderValue={removeHeaderValue}
        handleFormData={handleFormData}
        jsonData={jsonData}
      />
      {responseData !== "" && <Response responseData={responseData} />}
    </div>
  );
};

export default App;

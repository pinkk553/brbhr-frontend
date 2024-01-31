import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button, Select } from "@chakra-ui/react";
import { addStageToJobPosting, updateCandidateStage } from "../../services/CandidateService"; // Import the service function

const StageForm = ({ id, stageName, onStageAdded }) => {
  const [stage, setStage] = useState({
    id:id,
    name:stageName,
    description: "",
    roundNumber: 2,
    recruitmentStageType:'',
    Manager:''
  });





  const handleChange = (e) => {
    setStage({ ...stage, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = updateCandidateStage(id, stage);
      console.log("ApplicationStage has been updated", res);
      console.log(id);
      console.log(stage);
      onStageAdded()
    } catch (error) {
      console.error("Failed to update stage of application", error)
    }
  };

  console.log(stage)

  return (
    <Box p={4}>
      <Box p={4}>
      <form onSubmit={handleSubmit}>
        {/* Form fields for stage details */}
        <FormControl id="name" isRequired>
          <FormLabel>Stage</FormLabel>
          {/* <Input name="name" type="text" onChange={handleChange} /> */}
          <Input type="text" value={stage.name} name="name" borderRadius={0} onChange={handleChange}/>
        </FormControl>
        <FormControl mt={4} id="recruitmentStageType" isRequired>
          <FormLabel>Stage Type</FormLabel>
          {/* <Input name="name" type="text" onChange={handleChange} /> */}
          <Select name="recruitmentStageType" placeholder="----TYPE----" borderRadius={0} onChange={handleChange}>
            {/* <Input name="stageType" type="text" borderRadius={0}/> */}
            <option value={'INITIAL'} >INITIAL</option>
            <option value={'TEST'} >TEST</option>
            <option value={'INTERVIEW'} >INTERVIEW</option>
            <option value={'HIRED'} >HIRED</option>
          </Select>
        </FormControl>
        <FormControl id="description" mt={4}>
          <FormLabel>Description</FormLabel>
          <Input name="description" type="text" borderRadius={0} onChange={handleChange} />
        </FormControl>
        <FormControl id="roundNumber" mt={4}>
          <FormLabel>Round Number</FormLabel>
          <Input
            name="roundNumber"
            type="number"
            min={1}
           borderRadius={0}  onChange={handleChange}
          />
        </FormControl>

        <FormControl id="roundNumber" mt={4}>
          <FormLabel>Manager</FormLabel>
          <Input borderRadius={0}
            name="Manager"
            type="text"
            min={1}
            onChange={handleChange}
          />
        </FormControl>
        <Button mt={4} colorScheme="red" borderRadius={0} type="submit">
          Update Stage
        </Button>
      </form>
    </Box>
    </Box>
  );
};

export default StageForm;

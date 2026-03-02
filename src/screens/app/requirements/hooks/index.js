import { useState } from "react";
import { appImages } from "../../../../services"
import { useNavigation } from "@react-navigation/native";

export function useHooks() {

    const navigation = useNavigation();
    //Modal state
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);

    //edit detail state
    const [projectName, setProjectName] = useState('Code Baiz Platform');
    const [minBudget, setMinBudget] = useState(10000);
    const [maxBudget, setMaxBudget] = useState(50000);
    const [timeline, setTimeline] = useState('3 Months');

    // Inka final state (jo SummaryCard mein dikhega)
    const [finalProjectName, setFinalProjectName] = useState('Code Baiz Platform');
    const [finalBudget, setFinalBudget] = useState('$10,000 - $50,000');
    const [finalTimeline, setFinalTimeline] = useState('3 Months');

    const [selectedBuilder, setSelectedBuilder] = useState("")
    const [selectedStageOption, setSelectedStageOption] = useState("")
    const [isMainInputFocused, setIsMainInputFocused] = useState(false);


    const builderOption = [
        { id: 1, label: "AI", value: "AI" },
        { id: 2, label: "Developer", value: "Developer" },
        { id: 3, label: "Both", value: "Both", }
    ]
    const stageOption = [
        { id: 1, label: "Start from Scratch", value: "strach" },
        { id: 2, label: "Already started/Existing Project" }
    ]

    const handleSaveProjectDetails = () => {
        setFinalProjectName(projectName);
        const rangeString = `$${formatNumber(minBudget)} - $${formatNumber(maxBudget)}`;
        setFinalBudget(rangeString);
        setFinalTimeline(timeline);
        setIsEditModalVisible(false);
    };



    const formatNumber = (value) => {

        const safeValue = String(value || "");
        const cleanValue = safeValue.replace(/[^0-9]/g, "");
        return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };



    return {
        builderOption,
        selectedBuilder, setSelectedBuilder,
        stageOption,
        selectedStageOption, setSelectedStageOption,
        isMainInputFocused, setIsMainInputFocused,

        //Modal state
        isEditModalVisible, setIsEditModalVisible,

        //edit detail state
        projectName, setProjectName,
        minBudget, setMinBudget,
        maxBudget, setMaxBudget,
        timeline, setTimeline,

        // Inka final state (jo SummaryCard mein dikhega)
        finalProjectName, setFinalProjectName,
        finalBudget, setFinalBudget,
        finalTimeline, setFinalTimeline,

        handleSaveProjectDetails,


        navigation

    }
}